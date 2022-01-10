
var btn = document.querySelector(".btn");


function checkUserName() {
    var name = document.querySelector(".username").value;
    var check_err_name = document.querySelector(".err_name");
    var checkName = /[a-zA-Z0-9]/;


    if(name == "" || name == null) {
        check_err_name.innerHTML = "Họ tên không được để trống!";
        btn.disabled = true;
    }else if(!checkName.test(name)){
        check_err_name.innerHTML = "Họ tên không hợp lệ!";
        btn.disabled = true;
    }else {
        btn.disabled = false;
        check_err_name.innerHTML = "";
        return name;
    }
}

function checkEmail() {
    var email = document.querySelector(".email").value;
    var check_err_mail = document.querySelector(".err_email");
    var checkMail = /\S+@\S+\.\S+/;

    if(email == "" || email == null) {
        check_err_mail.innerHTML = "Email không được để trống!";
        btn.disabled = true;
    }else if(!checkMail.test(email)){
        check_err_mail.innerHTML = "Email không hợp lệ!";
        btn.disabled = true;
    }else {
        btn.disabled = false;
        check_err_mail.innerHTML = "";
        return email;
    }
}

function checkPass() {
    var password = document.querySelector(".password").value;
    var check_err_pass = document.querySelector(".err_password");
    var checkPass = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/;

    if(password == "" || password == null) {
        check_err_pass.innerHTML = "Password không được để trống!";
        btn.disabled = true;
    }else if(!checkPass.test(password)){
        check_err_pass.innerHTML = "Password không hợp lệ!";
        btn.disabled = true;
    }else {
        btn.disabled = false;
        check_err_pass.innerHTML = "";
        return password;
    }
}

function checkRePass() {
    var password = document.querySelector(".password").value;
    var repassword = document.querySelector(".repassword").value;
    var check_err_repass = document.querySelector(".err_repassword");

    if(repassword == "" || repassword == null || repassword != password) {
        check_err_repass.innerHTML = "Check Password phải trùng với Password!";
        btn.disabled = true;
    }else {
        btn.disabled = false;
        check_err_repass.innerHTML = "";
        return repassword;
    }
}

function submit() {
    var name = document.querySelector(".username");
    var email = document.querySelector(".email");
    var password = document.querySelector(".password");
    var repassword = document.querySelector(".repassword");

    if(checkUserName() && checkEmail() && checkPass() && checkRePass()) {
        alert("Bạn đã đăng ký thành công");
        name.value = null;
        email.value = null;
        password.value = null;
        repassword.value = null;
    }else{
        alert("Vui lòng kiểm tra dữ liệu!")
    }
}

