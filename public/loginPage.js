const loginBox = document.getElementById('login-box');
const loginLink = document.getElementById("login-Link");
const registerLink = document.getElementById('register-link');

registerLink.addEventListener('click' ,()=>{
    console.log("clicked");
    loginBox.classList.add('active');
});
loginLink.addEventListener('click' ,()=>{
    console.log("clicked");
    loginBox.classList.remove('active');
});