var login = document.querySelector(".login-card .login");
var signup = document.querySelector(".login-card .sign-up");
var loginForm = document.querySelector(".login-card .login form");
var signupForm = document.querySelector(".login-card .sign-up form");

function rotateToSignUp() {
    signup.classList.add("rotate-signup");
    signupForm.classList.remove("vanish");
    login.classList.add("rotate-login");
    loginForm.classList.add("vanish");
}


function rotateToLogin() {
    login.classList.remove("rotate-login");
    signupForm.classList.add("vanish");
    signup.classList.remove("rotate-signup");
    loginForm.classList.remove("vanish");
}
