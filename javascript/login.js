var signup_data = JSON.parse(localStorage.getItem("userdata"));
console.log(signup_data);


function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    console.log(user, pass);

    signup_data.forEach(function(product) {

        console.log(product.email, product.password)

        if (user == "" || pass == "") {
            var alert_email = document.getElementById("email_alert");

            alert_email.textContent = "please enter a valid email";

            alert_email.setAttribute("class", "alert_color")


            var alert_password = document.getElementById("password_alert");
            alert_password.textContent = "please enter the valid password";

            //  alert_password.setAttribute("style","color:orange")

            alert_password.setAttribute("style", "font-style: italic;")



        } else if (user == product.email && pass == product.password) {
            alert("Login successfull");
            window.location.href = "courses.html";


        } else {
            alert("invalid id or password")
            var alert_email = document.getElementById("email_alert");

            alert_email.textContent = "please enter a valid email";

            alert_email.setAttribute("class", "alert_color")


            var alert_password = document.getElementById("password_alert");
            alert_password.textContent = "please enter the valid password";

            //  alert_password.setAttribute("style","color:orange")

            alert_password.setAttribute("style", "font-style: italic;")
        }

    });
}


var lgbtn = document.getElementById("login_btn");
lgbtn.addEventListener("click", login);