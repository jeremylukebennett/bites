"use strict";

function printHomePage() {
    let mainContent = document.getElementById("page-content");

    mainContent.innerHTML = `
    <div id="carouselExampleSlidesOnly" class="carousel slide row" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100 col my-4" src="images/main-home-img.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100 col my-4" src="images/main-home-img-2.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100 col my-4" src="images/main-home-img-3.jpg" alt="Third slide">
            </div>
        </div>
        <div class="home-img-text">
            <p>100% NATURAL.</p>
            <p>HOMEMADE</p>
            <p>FRESH COOKIES.</p>
        </div>
        <button id="shop-now-btn">SHOP NOW</button>
    </div>

    <h3 class="text-center my-5">/ BEST SELLERS</h3>
    <p class="text-center">I am a paragraph. Click here to add your text and edit me.</p>

    <div class="row">
        <img src="images/white_choc.png" class="col my-4 home-image-thumbnails">
        <img src="images/oatmeal_bites.png" class="col my-4 home-image-thumbnails">
        <img src="images/jam_poppy.png" class="col my-4 home-image-thumbnails">
    </div>

    <div class="row">
        <p class="col text-center">WHITE CHOCOLATE BITES</p>
        <p class="col text-center">OATMEAL BITES</p>
        <p class="col text-center">JAM & POPPY SEED BITES</p>
    </div>

    <div class="row">
        <p class="col text-center">$1.00</p>
        <p class="col text-center">$2.00</p>
        <p class="col text-center">$1.00</p>
    </div>

    <div id="cookies-div-container" class="row">
        <span id="cookies-div" class="mx-auto">ALL COOKIES</span>
    </div>
    <hr>

    <!-- This should contain images -->
    <div id="follow-me-container">
    <div class="row "id="follow-me-imgs-row-1">
            <img src="images/bowls.jpg" class="col my-4 home-image-thumbnails">
            <img src="images/spoon.jpg" class="col my-4 home-image-thumbnails">
            <img src="images/oranges.jpg" class="col my-4 home-image-thumbnails">
    </div>

    <div class="row "id="follow-me-imgs-row-2">
            <img src="images/choc_cookies.jpg" class="col my-4 home-image-thumbnails">
            <img src="images/ingredients.jpg" class="col my-4 home-image-thumbnails">
            <img src="images/crackers.jpg" class="col my-4 home-image-thumbnails">
    </div>
        <div id="follow-me-text-container" class="row">
            <div class="col" id="follow-me-grey-rectangle-overlay">
                <p id="follow-me-text">/ FOLLOW ME FOR MORE BITES</p>
            </div>
        </div>
    </div>

</div>
`;
}



module.exports = {printHomePage};