var button = document.getElementById("menu-button");
var menuContent = document.getElementById("menu-content");
var burger = document.getElementById("img-burger");

var quizContent = document.getElementById("quiz-content");
var chevronAsideDiv = document.getElementById("chevron-aside-div");
var chevronAside = document.getElementById("chevron-aside");

var quizButton = document.getElementById("quiz-button");
var quizImg = document.getElementById("img-quiz");
var quizContent = document.getElementById("quiz-content")


quizButton.onclick = function () {
    if (quizContent.className == "") {
        quizContent.className = "open";
        quizImg.src = "../assets/CloseWhite.svg";
    } else if (quizContent.className == "open") {
        quizContent.className = "";
        quizImg.src = "../assets/Q.svg";
    };
};


button.onclick = function () {
    if (menuContent.className == "open") {
        menuContent.className = "";
    } else if (menuContent.className == "") {
        menuContent.className = "open";
    };


    if (menuContent.className == "open") {
        burger.src = "../assets/CloseWhite.svg";
        burger.style.transform = "translateY(-2px)";
    } else if (menuContent.className == "") {
        burger.src = "../assets/BurgerWhite.svg";
        burger.style.transform = "translateY(2px)";
    };
};


chevronAsideDiv.onclick = function () {
    if (quizContent.className == "") {
        quizContent.className = "open";
        chevronAside.style.transform = "rotate(0deg) translateY(2px)";
    } else if (quizContent.className == "open") {
        quizContent.className = "";
        chevronAside.style.transform = "rotate(180deg) translateY(2px)";
    };
};