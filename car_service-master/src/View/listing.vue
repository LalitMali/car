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
        <div class="columns">
        <div class="column is-one-quarter">
        <div class="filter-1">
        <p><b>FILTER NAME</b></p>
        <br>
        <ul>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        </ul>
        </div>
        <div class="filter-1">
        <p><b>FILTER NAME</b></p>
        <br>
        <ul>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        </ul>
        </div>
        <div class="filter-1">
        <p><b>FILTER NAME</b></p>
        <br>
        <ul>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        <li><input type="checkbox">FILTER</li>
        </ul>
        </div>
        </div>
        <div class="column">
        <div class="columns">
        <div class="column is-three-fifths">
        <div class="listing-main">
        <p>1,000 <span>Mazda Demio Car Parts</span></p>
        <div class="filter-c">filter <span>X</span></div>
        <div class="filter-c">filter <span>X</span></div>
        <div class="filter-c">filter <span>X</span></div>
        <div class="filter-c">filter <span>X</span></div>
        <a href="#" class="cl">CLEAR ALL FILTERS</a>
        </div>
        </div>
        <div class="column">
        <div class="field addj">
         <div class="control">
           <div class="select is-danger">
             <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
       </div>
      </div>
       </div>
        </div>
        </div>
       <div class="columns">
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       </div>

       <div class="columns">
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       </div>

       <div class="columns">
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       </div>

       <div class="columns">
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       <div class="column product">
       <img src="../assets/150x150.png">
       <p align="center">Product Description</p>
       <h1 align="center"><b>Price</b></h1>
       <h2 align="center">3.7 <i class="material-icons red ">star</i><span> (30)</span></h2>
       </div>
       </div>
        </div>
        </div>
        </section>

    </div>
</template>

<style scoped>
    @import '../assets/css/style.css';
</style>
