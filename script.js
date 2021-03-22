var login = document.querySelector(".login-card .login");
var signup = document.querySelector(".login-card .sign-up");
var loginForm = document.querySelector(".login-card .login form");
var signupForm = document.querySelector(".login-card .sign-up form");

function rotateToSignUp() {
    login.classList.add("rotate-login");
    signup.classList.add("rotate-signup");
}


function rotateToLogin() {
    login.classList.remove("rotate-login");
    signup.classList.remove("rotate-signup");
    
}
