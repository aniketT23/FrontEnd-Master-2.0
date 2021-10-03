async function validate() {
    let res = await fetch("http://localhost:2230/signup");
    let data = await res.json();
    let user = data.users;
    return user;
}
var logger = document.getElementById("login");
var x = {};

let me = localStorage.setItem("looger", "login");
async function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    console.log(user, pass);

    let users = await validate();
    console.log(users);
    let count = 0;
    users.forEach(function(product) {

        // console.log(product.Email, product.password)

        if (user == "" || pass == "") {
            var alert_email = document.getElementById("email_alert");

            alert_email.textContent = "please enter a valid email";

            alert_email.setAttribute("class", "alert_color")


            var alert_password = document.getElementById("password_alert");
            alert_password.textContent = "please enter the valid password";

            //  alert_password.setAttribute("style","color:orange")

            alert_password.setAttribute("style", "font-style: italic;")



        } else if (user == product.Email && pass == product.password) {
            // alert("Login successfull");
            count++;

            window.location.href = "dashboard";
            logger.innerHTML = product.firstname;
            x.name = logger.innerHTML;
            me = localStorage.setItem("looger", product.firstname);
            console.log(x);
        }

    });

    if (count == 0) {
        // alert("invalid id or password")
        var alert_email = document.getElementById("email_alert");

        alert_email.textContent = "please enter a valid email";

        alert_email.setAttribute("class", "alert_color")


        var alert_password = document.getElementById("password_alert");
        alert_password.textContent = "please enter the valid password";

        //  alert_password.setAttribute("style","color:orange")

        alert_password.setAttribute("style", "font-style: italic;")
    }
}



var lgbtn = document.getElementById("login_btn");
lgbtn.addEventListener("click", login);
// export default x;