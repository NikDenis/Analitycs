
const autorizationInput = document.querySelectorAll('.Authorization-block-input');
const form = document.querySelector('.Authorization-block-form');


form.addEventListener('input', (event) => {
    autorizationInput.forEach((el) => {
    if(autorizationInput[1].value === ""
    || autorizationInput[2].value === ""
    || autorizationInput[1].value !== autorizationInput[2].value) {
        autorizationInput[1].style.borderColor = 'red';
        autorizationInput[1].style.borderWidth = '2px';
        autorizationInput[2].style.borderColor = 'red';
        autorizationInput[2].style.borderWidth = '2px';
    }
    else {
        autorizationInput[1].style.borderColor = 'green';
        autorizationInput[1].style.borderWidth = '2px';
        autorizationInput[2].style.borderColor = 'green';
        autorizationInput[2].style.borderWidth = '2px';
        event.preventDefault();
    }
  })
})
