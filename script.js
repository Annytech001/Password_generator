// build Javascript object 
const genBtn = document.querySelector ("btn1");
const copyBtn = document.querySelector ("btn2");
const addBtn = document.querySelector ("btn3");

genBtn.addEventListener("click",() => genPassword());
copyBtn.addEventListener("click",() => copyPassword());

function genPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    passwordLength = 12;
    password = "";
}
