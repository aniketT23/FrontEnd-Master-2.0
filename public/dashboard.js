var user = document.getElementById("login");


const x = localStorage.getItem("looger");
console.log(x);

user.innerHTML = x;

var title = document.getElementById("dash_heading");
title.innerHTML = `Welcome Back, ${x}`

var val = document.getElementById("head");

function getComboA(x) {
    var value = x.value;
    val.innerHTML = value;
}