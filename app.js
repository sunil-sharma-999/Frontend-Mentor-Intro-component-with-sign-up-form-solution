const field = document.getElementsByClassName('field');
const form = document.querySelector('form');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const password = document.querySelector('.passwd');
const valid =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const names = [fname, lname, email, password];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (i = 0; i < 4; i++) {
    if (i == 2) {
      e.preventDefault();
      emailValidation();
    } else if (
      names[i] === '' ||
      names[i].value.length < 3 ||
      names[i] === null
    ) {
      field[i].classList.add('error');
      field[i].querySelector('img').style.visibility = 'visible';
      field[i].querySelector('p').style.visibility = 'visible';
    } else if (names[i] !== '' || names[i].value.length >= 3) {
      field[i].classList.remove('error');
      field[i].querySelector('img').style.visibility = 'hidden';
      field[i].querySelector('p').style.visibility = 'hidden';
    } else {
      console.log('error');
    }
  }
});

function emailValidation() {
  if (valid.test(email.value)) {
    field[2].classList.remove('error');
    field[2].querySelector('img').style.visibility = 'hidden';
    field[2].querySelector('p').style.visibility = 'hidden';
  } else {
    field[2].classList.add('error');
    field[2].querySelector('img').style.visibility = 'visible';
    field[2].querySelector('p').style.visibility = 'visible';
  }
}
