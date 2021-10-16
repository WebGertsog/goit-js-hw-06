

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", (event) => {
  
  if(event.currentTarget.value.length === 6){
    
    event.currentTarget.classList.add('valid')
  } else {
    event.currentTarget.classList.add('invalid')
  };
  
  if (event.currentTarget.value.length !== 6){
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  } else {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  };

});

