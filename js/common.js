    var code = ""; //unreasonable:cause global pollution
    function createcode() {
        code = "";
        var codelength = 4; //set code's length
        var checkcode = document.querySelector(".gain_code"); //gain the display area
        console.log(checkcode.innerHTML)

        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

        for (var i = 0; i < codelength; i++) {
            var index = Math.floor(Math.random() * 62);
            code += random[index];
        }
        checkcode.innerText = code;
    }

//when refresh page, create a new code
window.onload = function () {
    createcode();
}


//login username check
function nameChange() {
    var nameipt = document.querySelector(".inputname");
    var namehint = document.querySelector(".nameHint");
    var reg = new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]{6,12}$/);
    if (nameipt.value === "") {
        namehint.innerHTML = "please enter";
        namehint.style.color = 'red';
        return false;
    } else if (!reg.test(nameipt.value)) {
        namehint.innerHTML = "enter 6 to 12 characters";
        namehint.style.color = "red";
        return false;
    } else {
        namehint.innerHTML = "success";
        namehint.style.color = "green";
        return true;
    }
}

//register username check
function RegnameChange() {
    var nameipt = document.querySelector(".Reginputname");
    var namehint = document.querySelector(".RegnameHint");
    var reg = new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]{6,12}$/);
    if (nameipt.value === "") {
        namehint.innerHTML = "please enter";
        namehint.style.color = 'red';
        return false;
    } else if (!reg.test(nameipt.value)) {
        namehint.innerHTML = "enter 6 to 12 characters";
        namehint.style.color = "red";
        return false;
    } else {
        namehint.innerHTML = "success";
        namehint.style.color = "green";
        return true;
    }
}

//login password check
function passwordChange() {
    var passwordipt = document.querySelector(".inputpassword");
    var passwordhint = document.querySelector(".passwordHint");
    var reg = new RegExp(/^[a-zA-Z0-9]{6,12}$/);
    if (passwordipt.value === "") {
        passwordhint.innerHTML = "please enter";
        passwordhint.style.color = 'red';
        return false;
    } else if (!reg.test(passwordipt.value)) {
        passwordhint.innerHTML = "enter 6 to 12 characters";
        passwordhint.style.color = "red";
        return false;
    } else {
        passwordhint.innerHTML = "success";
        passwordhint.style.color = "green";
    }
}

//register password check
function RegpasswordChange() {
    var passwordipt = document.querySelector(".Reginputpassword");
    var passwordhint = document.querySelector(".RegpasswordHint");
    var reg = new RegExp(/^[a-zA-Z0-9]{6,12}$/);
    if (passwordipt.value === "") {
        passwordhint.innerHTML = "please enter";
        passwordhint.style.color = 'red';
        return false;
    } else if (!reg.test(passwordipt.value)) {
        passwordhint.innerHTML = "enter 6 to 12 characters";
        passwordhint.style.color = "red";
        return false;
    } else {
        passwordhint.innerHTML = "success";
        passwordhint.style.color = "green";
    }
}

//passwordComfirm
function passwordComfirm() {
    var passwordComfirm = document.querySelector(".passwordComfirm");
    var passwordHint = document.querySelector(".passwordHintComfirm");
    var passwordipt = document.querySelector(".Reginputpassword");
    if (passwordComfirm.value === passwordipt.value && passwordComfirm.value !== " ") {
        passwordHint.innerHTML = "success";
        passwordHint.style.color = "green";
        return false;
    } else if (passwordHint.length < 6 || passwordHint.length > 12) {
        passwordHint.innerHTML = "formal error";
        passwordHint.style.color = "red";
        return false;
    } else {
        passwordHint.innerHTML = " the password is not match ";
        passwordHint.style.color = "red";
        return true;
    }
}

//verification code check
function codeChange() {
    var codeipt = document.querySelector(".verification_code");
    var codeshow = document.querySelector(".gain_code");
    var codehint = document.querySelector(".codeHint");
    if (codeipt.value === "") {
        codehint.innerHTML = "please enter";
        codehint.style.color = "red";
        return false;
    } else if (codeipt.value != codeshow.innerHTML) {
        codehint.innerHTML = "enter error";
        codehint.style.color = "red";
        return false;
    } else {
        codehint.innerHTML = "success";
        codehint.style.color = "green";
        return true;
    }
}


//email check 
function emailChange() {
    var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/; //define regexp
    var mailipt = document.querySelector(".inputemail"); //gain check object
    var mailhint = document.querySelector(".emailHint"); //gain info status
    if (mailipt.value === "") {
        mailhint.innerHTML = "please enter";
        mailhint.style.color = "red";
        return false;
    } else if (!reg.test(mailipt.value)) {
        mailhint.innerHTML = "formal error";
        mailhint.style.color = "red";
        return false;
    } else {
        mailhint.innerHTML = "success";
        mailhint.style.color = "green";
        return true;
    }
}

//signin
function signinClick() {
    var namehint = document.querySelector(".nameHint");
    var passwordhint = document.querySelector(".passwordHint");
    var codehint = document.querySelector(".codeHint");
    if (namehint.innerHTML === "success" && passwordhint.innerHTML === "success" && codehint.innerHTML === "success") {
        alert("sign in success ")
        window.location.href = "homepage.html";
        return true;
    } else {
        alert("please enter correct info !");
        return false;
    }

    xmlDoc();

};

//ajax
function xmlDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //IE7、firefox、chrome、opera、safari
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE5、IE6
    }


        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            console.log(data);
        } else {
            console.log("request failed~")
        }
    xmlhttp.open("GET", ":92/OAUserService.asmx?op=GetUserByParameters", true);
    xmlhttp.send();
}


