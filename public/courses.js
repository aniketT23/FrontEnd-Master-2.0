let aCourse = document.getElementById("aCourse");
let pCourse = document.getElementById("pCourse");
let lCourse = document.getElementById("lCourse");
let content = document.getElementById("course-content");
let pop = document.getElementById("popular-main");
let val = document.getElementById("search");
let body = document.querySelector("body");
let popdiv = document.createElement("div");

function backgroundChange() {
    aCourse.style.background = "none";
    aCourse.style.color = "#e6e6e6a2";
    content.style.display = "none";

}

function allCourse() {
    aCourse.style.background = "rgb(" + 10 + "," + "87" + "," + 163 + ")";
    aCourse.style.color = "white";
    content.style.display = "grid";
    popdiv.style.display = "none";
    pop.style.display = "none";
}


pCourse.addEventListener("click", backgroundChange);
lCourse.addEventListener("click", backgroundChange);
aCourse.addEventListener("click", allCourse);


function popularCourse() {

    pop.style.display = "grid";

}
pCourse.addEventListener("click", popularCourse);


let a = [{
    id: "html",
    image: "https://static.frontendmasters.com/assets/courses/2019-11-06-html-email-v2/thumb.webp",
    heading: "HTML Email Development, v2",
    profile: "https://static.frontendmasters.com/assets/teachers/rodriguez/thumb.webp",
    name: "Jason Rodriguez <span><br> Litmus</span>",
    info: "Learn the foundations of HTML email development such as structure, semantic markup, layouts, and creating accessible email.",
    time: "3 hours,56 minutes <Strong> CC </Strong>",
    btn1: "Watch Free Preview",
    btn2: "Get Full Access"


}, {
    id: "css",
    image: "https://static.frontendmasters.com/assets/courses/2018-01-31-css-in-depth-v2/thumb.webp",
    heading: "CSS In-Depth, v2",
    profile: "https://static.frontendmasters.com/assets/teachers/weyl/thumb.webp",
    name: "Estelle Weyl <span><br> Mozilla Developer Network</span>",
    info: "Take a deep-dive into the essential features of CSS, while also exploring CSS features you probably didn’t even know existed!",
    time: "10 hours,26 minutes <Strong> CC </Strong>",
    btn1: "Watch Free Preview",
    btn2: "Get Full Access"

}, {
    id: "javascript",
    image: "https://static.frontendmasters.com/assets/courses/2020-11-18-monorepos/thumb.webp",
    heading: "JavaScript and TypeScript Monorepos",
    profile: "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
    name: "Mike North <span><br> LinkdIn</span>",
    info: "Monorepos have taken the JavaScript world by storm, unlocking powerful new patterns around composition, encapsulation, and ease of maintenance.",
    time: "3 hours,46 minutes <Strong> CC </Strong>",
    btn1: "Watch Free Preview",
    btn2: "Get Full Access"

}, {
    id: "react",
    image: "https://static.frontendmasters.com/assets/courses/2021-06-15-redux-fundamentals/thumb.webp",
    heading: "Redux Fundamentals (feat. React)",
    profile: "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
    name: "Steve Kinney <span><br> Twilio</span>",
    info: "Learn the Redux API from scratch, then learn to hook Redux into a React application. Also learn how to extend Redux with various tools from its ecosystem, including Reselect, Immer, and Redux Toolkit, to reduce boilerplate and speed up your development!",
    time: "4 hours,41 minutes <Strong> CC </Strong>",
    btn1: "Watch Free Preview",
    btn2: "Get Full Access"
}, {
    id: "vue",
    image: "https://static.frontendmasters.com/assets/courses/2021-02-18-production-vue/thumb.webp",
    heading: "Production-Grade Vue.js",
    profile: "https://static.frontendmasters.com/assets/teachers/hong/thumb.webp",
    name: "Ben Hong <span><br> Netlify</span>",
    info: "Learn component design patterns, workflows to enhance productivity, testing methodologies, state management, routing, best practices for architecting increasingly complex applications, and more.",
    time: "4 hours,37 minutes <Strong> CC </Strong>",
    btn1: "Watch Free Preview",
    btn2: "Get Full Access"
}];

let store = localStorage.setItem("content", JSON.stringify(a));
let get_store = JSON.parse(localStorage.getItem("content"));


function search() {

    let indiv = document.createElement("div");
    let img = document.createElement("img");
    let contdiv = document.createElement("div");
    let heading = document.createElement("h2")
    let profile_div = document.createElement("div");
    let profile_img = document.createElement("img");
    let trainer = document.createElement("div");
    let content_info = document.createElement("p");
    let duration = document.createElement("div");
    let button_div = document.createElement("div");
    let button1 = document.createElement("a");
    let button2 = document.createElement("a");


    get_store.forEach(function(p) {

        if (val.value == p.id) {
            // hoisting
            img.src = p.image;
            heading.innerHTML = p.heading;
            profile_img.src = p.profile;
            trainer.innerHTML = p.name;
            content_info.innerHTML = p.info;
            duration.innerHTML = p.time;
            button1.innerHTML = p.btn1;
            button2.innerHTML = p.btn2;
            button1.href = "particularCourse.html";

            // execution

            button_div.append(button1, button2);
            button_div.setAttribute("class", "course-btn");

            profile_div.append(profile_img, trainer);
            profile_div.setAttribute("class", "author");

            contdiv.append(heading, profile_div, content_info, duration, button_div)
            indiv.append(img, contdiv);
            popdiv.append(indiv);
            popdiv.setAttribute("class", "pop-main");
            body.insertBefore(popdiv, pop);
            content.style.display = "none";
            pop.style.display = "none";
            popdiv.style.display = "grid";

        } else if (val.value == "") {
            popdiv.innerHTML = null;

            content.style.display = "grid";

        }


    });


}

val.addEventListener("input", search);


var user = document.getElementById("login");


const x = localStorage.getItem("looger");
console.log(x);

user.innerHTML = x;