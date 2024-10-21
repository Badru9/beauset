const inputPassword = document.querySelector('#password');
const btnShow = document.querySelector('.btn-show');
const btnHide = document.querySelector('.btn-hide');

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
