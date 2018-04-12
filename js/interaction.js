"use strict";

let $ = require("jquery");
let home = require("./home-page");
let shop = require("./shop-page");


let homeLink = document.getElementById("load-home");


// Load Home Page
homeLink.addEventListener("click", function(){
    home.printHomePage();
});






let shopLink = document.getElementById("load-shop");


// Load Home Page
shopLink.addEventListener("click", function(){
    shop.printShopPage();
});


// printShopPage