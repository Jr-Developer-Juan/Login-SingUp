const container = document.querySelector('.container');
const singupButton = document.querySelector('.singup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click', () =>{
    container.classList.add('active');
})

singupButton.addEventListener('click', () =>{
    container.classList.remove('active');
})