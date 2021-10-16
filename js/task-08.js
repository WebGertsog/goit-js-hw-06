const form = document.querySelector('.login-form');

form.addEventListener('submit', formFun);

function formFun(event) {

  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('Все поля должны быть заполнены!');
  }

  const dataBase = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  console.log(dataBase);
  event.currentTarget.reset()
};



