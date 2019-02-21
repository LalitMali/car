<template>
    <div>
        <header>
            <div class="columns">
                <div class="column is-1" style="padding:6px auto;">
                    <label class="icon-3">
                        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                        <label for="openSidebarMenu" class="sidebarIconToggle icon">
                            <i class="material-icons">format_indent_increase</i>
                        </label>
                        <div id="sidebarMenu">
                            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                            <label for="openSidebarMenu" class="togl">
                                <i class="material-icons">clear</i>
                            </label>
                            <br>
                          <ul class="sidebarMenuInner" id="link">
                                <li><a href="#"><i class="material-icons red ">directions_car</i> Used Cars </a></li>
       <li><a href="#"><i class="material-icons red">local_car_wash</i> New Cars </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">rv_hookup</i> Car Imports </a></li>
       <li><a href="#"><i class="material-icons red">build</i> Car Servicing </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">settings</i> Car Parts </a></li>
       <li><a href="#"><i class="material-icons red">radio_button_checked</i> Car Accessories </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">spellcheck</i> Car Finance </a></li>
       <li><a href="#"><i class="material-icons red">verified_user</i> Car Insurance </a>
                                </li>
                                <hr class="hrr">
                                <li><a href="#"><i class="material-icons red ">local_car_wash</i> My Cars </a></li>
       <li><a href="#"><i class="material-icons red">assignment</i> My Enquiries
                                    <label class="noti">2</label>
                                    </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">shopping_basket</i> Orders <label class="noti ">1</label></a></li>
       <li><a href="#"><i class="material-icons red">library_books</i> My Bookings </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">favorite_border</i> Wishlist </a></li>
       <hr class="hrr">
       <li><a href="#"><i class="material-icons red">favorite_border</i> Wishlist </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">favorite_border</i> Wishlist </a></li>
       <li><a href="#"><i class="material-icons red">favorite_border</i> Wishlist </a>
                                </li>
                                <li><a href="#"><i class="material-icons red ">favorite_border</i> Wishlist </a></li>
       <li><a href="#"><i class="material-icons red">favorite_border</i> Wishlist </a>
                                </li>

                            </ul>
                        </div>
                    </label>
                </div>

                <div class="column is-2"><img src="../assets/logo.png" class="logo"></div>
                <div class="column is-6">
                    <div class="field has-addons center">
                        <div class="control is-full-w">
                            <input class="input is-rounded" type="text" placeholder="Search for cars, parts, & more...">
                        </div>
                        <div class="control">
                            <button class="button is-danger is-rounded"><i class="material-icons">search</i></button>
                        </div>
                    </div>
                </div>
                <div class="column is-3 is-mobile">
                    <ul class="uls">
                        <li><a href="#"><i class="material-icons">help_outline</i></a></li>
                        <li><a href="#"><i class="material-icons">person_outline</i></a></li>
                        <li><a href="#"><i class="material-icons">favorite_border</i></a></li>
                        <li><a href="#"><i class="material-icons">shopping_cart</i></a></li>
                        <li class="icon-2">
                            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                            <label for="openSidebarMenu" class="black "><i class="material-icons">format_indent_increase</i>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <section>
            <div class="is-full top-buttom">
                <h1>What are you looking for?</h1>
            </div>

            <div class="columns is-mobile">
                <div class="column is-three-fifths is-offset-one-fifth">
                    <ul class="uls-2">
                        <li><a href='#'><i class="material-icons">directions_car</i>Used Cars</a></li>
                        <li><a href='#'><i class="material-icons">directions_car</i>New Cars</a></li>
                        <li><a href='#'><i class="material-icons">rv_hookup</i>Car Imports</a></li>
                        <li><a href='#'><i class="material-icons">build</i>Car Servicing</a></li>

                        <li><a href='#'><i class="material-icons">thumb_up_alt</i>Car Finance</a></li>
                        <li><a href='#'><i class="material-icons">verified_user</i>Car Insurance</a></li>
                        <li><a href='#'><i class="material-icons">settings</i>Car Parts</a></li>
                        <li><a href='#'><i class="material-icons">radio_button_checked</i>Car Accessories</a></li>
                    </ul>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-1">BROWSE BY STYLE</p><span class="p-1-span"><hr></span>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>

            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>DEALS OF THE WEEK</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="6" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>

            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>LATEST ARRIVALS VIEW ALL
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>
            <br>
            <br>
            <br>
            <div class="is-full">
                <carousel v-bind:per-page-custom=[[480,3],[780,1]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" :paginationEnabled="false" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                    <slide><img class="full-width" src="../assets/1920x300.png"></slide>
                    <slide><img class="full-width" src="../assets/1920x300.png"></slide>
                    <slide><img class="full-width" src="../assets/1920x300.png"></slide>
                    <slide><img class="full-width" src="../assets/1920x300.png"></slide>
                    <slide><img class="full-width" src="../assets/1920x300.png"></slide>
                    <slide><img class="full-width" src="../assets/1920x300.png"></slide>
                </carousel>
            </div>
            <br>
            <br>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>TOP SELECTIONS
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>BEST VALUE
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>

            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-1"><b>BOOK A SERVICE</b></p><span class="p-1-span"><hr></span>

                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <button class="button is-danger is-rounded">Professional</button>
                    <button class="button is-danger is-rounded">Home</button>
                    <button class="button is-danger is-rounded">Creative</button>
                    <button class="button is-danger is-rounded">Health</button>
                    <button class="button is-danger is-rounded">Machine</button>
                    <br>
                    <carousel v-bind:per-page-custom=[[480,3],[780,5]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" :paginationEnabled="false" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>" style="margin-top:20px;">
                        <slide><img src="../assets/302x302.png">
                            <p class="p-5">Sub Category</p>
                        </slide>
                        <slide><img src="../assets/302x302.png">
                            <p class="p-5">Sub Category</p>
                        </slide>
                        <slide><img src="../assets/302x302.png">
                            <p class="p-5">Sub Category</p>
                        </slide>
                        <slide><img src="../assets/302x302.png">
                            <p class="p-5">Sub Category</p>
                        </slide>
                        <slide><img src="../assets/302x302.png">
                            <p class="p-5">Sub Category</p>
                        </slide>
                        <slide><img src="../assets/302x302.png">
                            <p class="p-5">Sub Category</p>
                        </slide>
                    </carousel>
                </div>
            </div>

            <br>
            <br>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <div class="columns">
                        <div class="column"><img src="../assets/banners.png"></div>
                        <div class="column"><img src="../assets/banners.png"></div>
                    </div>
                    <div class="columns">
                        <div class="column"><img src="../assets/banners.png"></div>
                        <div class="column"><img src="../assets/banners.png"></div>
                    </div>
                </div>
            </div>
            <br>
            <br>

            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>HIGHEST RATING
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>
            <br>
            <br>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>TOP LUXURY CARS
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>
            <br>
            <br>

            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>BEST 4x4 CARS
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,4]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>
            <br>
            <br>
            <div class="is-full">
                <img class="full-width" src="../assets/banners1.png">
            </div>
            <br>
            <br>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <p class="p-2"><span>Over Drive BY PAZO
</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
                    <hr style="float:left;width:100%;margin:0;">
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">
                    <carousel v-bind:per-page-custom=[[480,3],[780,2]] per-page="1" paginationColor="#d8d8d8" paginationActiveColor="#ff3860" autoplayDirection="forward" perPage="1" :loop="true" :autoplay="doAutoplay" :autoplay-timeout="4000" :navigationEnabled="true" navigationNextLabel="<i class='material-icons red'>keyboard_arrow_right</i>" navigationPrevLabel="<i class='material-icons red'>keyboard_arrow_left</i>">
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                        <slide><img src="../assets/150x150.png"></slide>
                    </carousel>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    @import '../assets/css/style.css';
</style>
