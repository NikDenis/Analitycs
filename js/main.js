

const closeBtn = document.querySelector('.menu-list-close-btn');
const menuMobile = document.querySelector('.menu-mobile-block-wrp');
const span = document.querySelector('.header-burger-svg');
closeBtn.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})

span.addEventListener('click', () => {
    menuMobile.style.display = 'flex';
    menuMobile.style.flexDirection = 'column';
    menuMobile.style.gap = '20px'
})



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



const mediaMobile600 = window.matchMedia("(max-width: 600px)");
const mediaMobile400 = window.matchMedia("(max-width: 400px)");

const monitoringTxt = document.querySelector('.monitoring-txt');
if (mediaMobile600.matches) {
    monitoringTxt.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.";
}

const authorizationBlock = document.querySelector('.Authorization');
if (mediaMobile400.matches) {
    authorizationBlock.classList.remove('center');
}