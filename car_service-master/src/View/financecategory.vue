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
                            <ul class="sidebarMenuInner">
                                <li><a v-bind:href="siteurl"><i class="material-icons red ">directions_car</i> Used Cars </a></li>
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

        <section class="listing-div">
            <div class="is-full top-buttom">
                <h1>Car Finance Services in Kenya</h1>
                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <br>
                        <br>
                        <form>
                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <div class="select is-danger float-1">
                                                <select>
                                                    <option>Select Make</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <div class="select is-danger float-1 top-5">
                                                <select>
                                                    <option>Select Model</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><br>
                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-danger" type="text" placeholder="Input Car Value">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-danger" type="text" placeholder="Input Amount">
                                        </div>
                                    </div>
                                </div>
                            </div><br>
                            <div class="columns is-mobile">
                            <div class="column is-half is-offset-one-quarter">
                            <button class="button is-danger is-rounded float-1">GET QUOTES</button>
                            </div>
                            </div>
                            <div class="columns is-mobile">
                            <p class="fn-1">Please note that PAZO AUTO does not provide any car financing. We simply show you the options from our car finance providing partners. </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
    @import '../assets/css/style.css';
    embed,
    iframe,
    img,
    object,
    video {
        max-width: 100% !important;
    }
</style>
