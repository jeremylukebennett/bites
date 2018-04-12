"use strict";

function printShopPage() {
    let mainContent = document.getElementById("page-content");

    mainContent.innerHTML = `<div id="shop-content-container" class="mx-auto">
    <div id="shop-header-text">
        <h2 class="text-center">PICK YOUR COOKIES</h2>







        <div class="row cookie-wrapper-div">
                <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/jam_poppy.png" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/jam_poppy-qv.png" class="mx-auto shop-image-thumbnails"/>
                </a>
                <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>
                </div>


                <div class="text-center p-0">
                <a class="foo" href="#">
                    <img src="images/poppy_seeds.png" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/poppy_seeds-qv.png" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>
                </div>


                <div class="text-center p-0">
                    <a class="foo" href="#">
                        <img src="images/oatmeal_bites.png" class="mx-auto shop-image-thumbnails"/>
                        <img src="images/oatmeal_bites-qv.png" class="mx-auto shop-image-thumbnails"/>
                    </a>
                          <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>
                </div>

        </div>






        <div class="row cookie-wrapper-div">

        <div class="text-center p-0">
            <a class="foo" href="#">
                <img src="images/soft_butter.png" class="mx-auto shop-image-thumbnails"/>
                <img src="images/soft_butter-qv.png" class="mx-auto shop-image-thumbnails"/>
            </a>
                <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>
        </div>

        <div class="text-center p-0">

            <a class="foo" href="#">
                <img src="images/parm.png" class="mx-auto shop-image-thumbnails"/>
                <img src="images/parm-qv.png" class="mx-auto shop-image-thumbnails"/>
            </a>
                <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

        </div>



        <div class="text-center p-0">

            <a class="foo" href="#">
                <img src="images/white_choc.png" class="mx-auto shop-image-thumbnails"/>
                <img src="images/white_choc-qv.png" class="mx-auto shop-image-thumbnails"/>
            </a>
                <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

        </div>

    </div>




    <div class="row cookie-wrapper-div">
            <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/jam_bites.png" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/jam_bites-qv.png" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

            </div>


            <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/choc_chips.png" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/choc_chips-qv.png" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

            </div>

            <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/nuts_caramel.png" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/nuts_caramel-qv.png" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

            </div>

        </div>





        <div class="row cookie-wrapper-div">



            <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/butter.png" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/butter-qv.png" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

            </div>


            <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/pecan_nuts.jpg" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/pecan_nuts-qv.jpg" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>



            </div>


            <div class="text-center p-0">

                <a class="foo" href="#">
                    <img src="images/seeds.jpg" class="mx-auto shop-image-thumbnails"/>
                    <img src="images/seeds-qv.jpg" class="mx-auto shop-image-thumbnails"/>
                </a>
                     <p class="cookie-name">Jam & Poppy Seed Bites</p>
                <p class="styled-font">$1.00</p>

            </div>

        </div>

    
    


    </div>
</div>


</div>`;
}

module.exports = {printShopPage};