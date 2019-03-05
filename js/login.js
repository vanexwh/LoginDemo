//login&register
(function () {
    var login = document.getElementById("login"); //btn
    var register = document.getElementById("register"); //btn
    var signin = document.querySelector(".signIn"); //table
    var signup = document.querySelector(".signUp"); //table
    //register
    register.onclick = function () {
        signin.style.display = 'none';
        signup.style.display = 'block';
    };
    //login 
    login.onclick = function () {
        signup.style.display = 'none';
        signin.style.display = 'block';
    }
})();



