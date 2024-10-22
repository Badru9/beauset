const inputPassword = document.querySelector('#password');
const btnShow = document.querySelector('.btn-show');
const btnHide = document.querySelector('.btn-hide');
const selectCountry = document.querySelector('#country');

btnShow.addEventListener('click', () => {
  btnShow.classList.add('hidden');
  btnHide.classList.remove('hidden');
  console.log('show');

  inputPassword['type'] = 'text';
});

btnHide.addEventListener('click', () => {
  btnHide.classList.add('hidden');
  btnShow.classList.remove('hidden');
  console.log('hide');
  inputPassword['type'] = 'password';
});

const getData = async () => {
  const url = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';
  const response = await fetch(url);

  const data = await response.json();

  console.log(data.data);

  if (data.data) {
    for (let i = 0; i < data.data.length; i++) {
      const option = document.createElement('option');
      option.value = data.data[i].name;
      option.textContent = data.data[i].name;
      selectCountry.appendChild(option);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('firstLoad') || location.reload) {
    console.log('first load');

    sessionStorage.setItem('firstLoad', '1');

    try {
      getData();
      console.log('function get data country');
    } catch (error) {
      console.log(error);
    }
  }
});
