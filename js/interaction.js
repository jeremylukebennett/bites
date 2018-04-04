"use strict";

let $ = require("jquery");
let home = require("./home-page");


let homeLink = document.getElementById("load-home");


// Load Home Page
homeLink.addEventListener("click", function(){
    home.printHomePage();
});