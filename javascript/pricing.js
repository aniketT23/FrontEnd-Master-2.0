function fn1() {
    var boxfn = document.querySelectorAll(".box").focus();

}



var heading = document.getElementById("register_heading") //heading change



var month = document.getElementById("monthly");
var year = document.getElementById("yearly");
var monthly = document.getElementById("monthly_team");
var yearly = document.getElementById("yearly_team");


function second() {


    year.style.background = "#90221e";

    month.style.background = "#111";
    yearly.style.background = "#111"
    monthly.style.background = "#111";
    heading.textContent = "Register for a Yearly Account";





}

function first() {
    month.style.background = "#90221e";

    year.style.background = "#111";
    yearly.style.background = "#111"
    monthly.style.background = "#111"
    heading.textContent = "Register for a Monthly Account";
}

function third() {
    month.style.background = "#111";

    year.style.background = "#111";

    monthly.style.background = "#90221e"

    yearly.style.background = "#111"

    heading.textContent = "Register for a Monthly Team Account";

}

function fourth() {
    month.style.background = "#111";

    year.style.background = "#111";

    monthly.style.background = "#111";
    yearly.style.background = "#90221e";
    heading.textContent = "Register for a Yearly Team Account";
}

year.addEventListener("click", second);
month.addEventListener("click", first);
monthly.addEventListener("click", third);
yearly.addEventListener("click", fourth);


//email script part

function validation() {
    var email_check = document.getElementById("email").value;
    var first_check = document.getElementById("first_name").value;
    var last_check = document.getElementById("last_name").value;
    var card_number_check = document.getElementById("card_number").value;
    var expiry_check = document.getElementById("expiry_date").value;
    var cvv_check = document.getElementById("cvv_number").value;
    var password_check = document.getElementById("password").value;
    var password2_check = document.getElementById("password_again").value;




    if (email_check == "") {
        // alert("All fields are mandatory");
        var alert_email = document.getElementById("email_alert");

        alert_email.textContent = "please enter a valid email"
        alert_email.setAttribute("class", "alert_color")

    } else {
        var alert_email = document.getElementById("email_alert");

        alert_email.textContent = "";

    }

    if (first_check == "") {
        var alert_first = document.getElementById("first_alert");

        alert_first.textContent = "please enter your first name";

    } else {
        var alert_first = document.getElementById("first_alert");

        alert_first.textContent = "";

    }

    if (last_check == "") {
        var alert_last = document.getElementById("last_alert");

        alert_last.textContent = "please enter your last name";

    } else {
        var alert_last = document.getElementById("last_alert");

        alert_last.textContent = "";
    }

    if (cvv_check == "" || expiry_check == "" || card_number_check == "") {
        var alert_cvv = document.getElementById("cvv_alert");

        alert_cvv.textContent = "your card number is incomplete";

    } else {
        var alert_cvv = document.getElementById("cvv_alert");

        alert_cvv.textContent = "";
    }

    if (password_check == "" || password_check.length < 6) {
        var alert_password = document.getElementById("password_alert");
        alert_password.textContent = "password should be atleast 6 char long";

        //  alert_password.setAttribute("style","color:orange")

        alert_password.setAttribute("style", "font-style: italic;")
    }

    if (password_check != password2_check) {
        var alert2_password = document.getElementById("password2_alert");
        alert2_password.textContent = "password doesnt match"
    } else if (email_check != "" && password_check != "" && first_check != "" && last_check != "") {
        alert("signup succesfull");
    }
    var data = [];
    var info = {}


    info["email"] = email_check;
    info["password"] = password_check;
    info["username"] = first_check;
    data.push(info);


    var userdata = JSON.stringify(data);
    localStorage.setItem("userdata", userdata);

    console.log(data);

}

var start = document.getElementById("signup_button");

start.addEventListener("click", validation);