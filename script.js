var login = document.querySelector(".login-card .login");
var signup = document.querySelector(".login-card .sign-up");

function rotateToSignUp() {
    signup.classList.add("rotate-signup");
    login.classList.add("rotate-login");   
}


function rotateToLogin() {
    login.classList.remove("rotate-login");
    signup.classList.remove("rotate-signup");
    
}
