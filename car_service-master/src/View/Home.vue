


<template>

  <div>
  <header>
  <div class="columns">
  <div class="column is-1" style="padding:6px auto;"><label class="icon"><i class="material-icons">format_indent_increase</i>
  
  </label></div>
  <div class="column is-2"><img src="../assets/logo.png"></div>
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
  <div class="column is-3">
  <ul class="uls">
  <li><a href="#"><i class="material-icons">help_outline</i></a></li>
  <li><a href="#"><i class="material-icons">person_outline</i></a></li>
  <li><a href="#"><i class="material-icons">favorite_border</i></a></li>
  <li><a href="#"><i class="material-icons">shopping_cart</i></a></li>
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
  </ul>
  <ul class="uls-2 uls-3">
  <li><a href='#'><i class="material-icons">thumb_up_alt</i>Car Finance</a></li>
  <li><a href='#'><i class="material-icons">spellcheck</i>Car Insurance</a></li>
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
 <div class='carousel is-5 carousel-animated carousel-animate-slide'>
  <div class='carousel-container'>
    <div class='carousel-item is-active'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
    <div class='carousel-item'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
    <div class='carousel-item'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
    <div class='carousel-item'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
    <div class='carousel-item'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
    <div class='carousel-item'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
    <div class='carousel-item'>
      <figure class="image is-2by1"><img src="../assets/banner.png"></figure>
    </div>
  </div>
  <div class="carousel-navigation is-centered">
    <div class="carousel-nav-left">
      <i class="material-icons">keyboard_arrow_left</i>
    </div>
    <div class="carousel-nav-right">
      <i class="material-icons">keyboard_arrow_right</i>
    </div>
  </div>
</div>
  </div>
  </div>

  <div class="columns is-mobile">
  <div class="column is-10 is-offset-1">
  <p class="p-2"><span>DEALS OF THE WEEK</span> <span><button class="button is-danger is-rounded">VIEW ALL</button></span></p>
  <hr style="float:left;width:100%;margin:0;">
  </div>
</div>


  </section>
  </div>
</template>

<script >

var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.from",function(a){return a?a:function(a,c,d){$jscomp.initSymbolIterator();c=null!=c?c:function(a){return a};var b=[],e=a[Symbol.iterator];if("function"==typeof e)for(a=e.call(a);!(e=a.next()).done;)b.push(c.call(d,e.value));else for(var e=a.length,g=0;g<e;g++)b.push(c.call(d,a[g]));return b}},"es6-impl","es3");var MOUSE_EVENTS=["click","touchstart"],Carousel=function(a){this.element=a;this.init()};
Carousel.prototype.init=function(){var a=this;this.items=Array.from(this.element.querySelectorAll(".carousel-item"));MOUSE_EVENTS.forEach(function(b){var c=a.element.querySelector(".carousel-nav-left"),d=a.element.querySelector(".carousel-nav-right");c&&c.addEventListener(b,function(b){b.preventDefault();a.move("previous");a.autoplayInterval&&(clearInterval(a.autoplayInterval),a.autoPlay(a.element.dataset.delay||5E3))},!1);d&&d.addEventListener(b,function(b){b.preventDefault();a.move("next");a.autoplayInterval&&
(clearInterval(a.autoplayInterval),a.autoPlay(a.element.dataset.delay||5E3))},!1)});this.initOrder();this.element.dataset.autoplay&&"true"==this.element.dataset.autoplay&&this.autoPlay(this.element.dataset.delay||5E3)};Carousel.prototype.initOrder=function(){var a=this.element.querySelector(".carousel-item.is-active");(a=this.items.indexOf(a))?this.items.push(this.items.splice(0,a)):this.items.unshift(this.items.pop());this.setOrder()};
Carousel.prototype.setOrder=function(){this.items.forEach(function(a,b){a.style["z-index"]=1!==b?"0":"1";a.style.order=b})};
Carousel.prototype.move=function(a){a=void 0===a?"next":a;var b=this;this.items.length&&(this.element.querySelector(".carousel-item.is-active").classList.remove("is-active"),"previous"===a?(this.items.unshift(this.items.pop()),this.element.classList.add("is-reversing")):(this.items.push(this.items.shift()),this.element.classList.remove("is-reversing")),(1<=this.items.length?this.items[1]:this.items[0]).classList.add("is-active"),this.setOrder(),this.element.classList.toggle("carousel-animated"),setTimeout(function(){b.element.classList.toggle("carousel-animated")},
50))};Carousel.prototype.autoPlay=function(a){var b=this;this.autoplayInterval=setInterval(function(){b.move("next")},void 0===a?5E3:a)};document.addEventListener("DOMContentLoaded",function(){var a=document.querySelectorAll(".carousel, .hero-carousel");[].forEach.call(a,function(a){new Carousel(a)})});

</script>

<style scoped>
header{
    box-shadow:0px 0px 24px -12px #000;
    padding:15px;
    text-align:center;
} 
.material-icons{
    font-size:38px;
}
.icon{
 width: 100%;
margin: 13px auto;
float: left;
}
.center{
     margin:6px auto;
}
.is-full-w{
    width:100%;
}
.btn-color-red{
    background-color:#ff004c;
}
.uls li{
    display:inline-block;
    font-size:93px;
    padding:0 5%;
}
.uls li a{
    color:#000;
}
.top-buttom{
    margin:45px auto;
}
.top-buttom{
    font-size:32px;
    text-align:center;
}
.uls{
    float:left;
    width:100%;
}
.uls-2 li a i{
    background-color:#ff5a5f;
    border-radius:50%;
    height:126px;
    font-size:75px !important;
    color:#fff;
    margin-bottom:15px;
}
.uls-2 li{
    float:left;
    width:15%;
    margin:10px 5%;
    text-align:center;
}
.uls-2 li a{
    color:#000;
    text-align:center; 
}
.uls-2 li i{
    padding:25px 15px;
    width:100%;
    display:table;    
}
.uls-2 li a{
    text-align:center;
    font-size:22px;
}
.uls-2 li a:hover{
    text-decoration:none;
}
.uls-2 li:nth-child(2) i{
    background-color:#63ace5;
}
.uls-2 li:nth-child(3) i{
    background-color:#ce1267;
}
.uls-2 li:nth-child(4) i{
    background-color:#04396c;
}
.uls-3{
    margin: 36px auto;
    float: left;
    width: 100%;
}
.uls-3 li:nth-child(1) i{
    background-color:#f2da00;
}
.uls-3 li:nth-child(2) i{
    background-color:#f9bd95;
}
.uls-3 li:nth-child(3) i{
    background-color:#35e2bd;
}
.uls-3 li:nth-child(4) i{
    background-color:#ff9b34;
}
.p-1{
  float:left;
  width:23%;
  font-size:29px;
  margin:16px auto;
}
.p-1-span{
  float:left;
  width:77%;
}
.carousel {
  position: relative;
  overflow: hidden;
}
.carousel .carousel-container {
  width: 100%;
  position: relative;
  border: none;
  display: flex;
  margin: 0;
  padding: 0;
  left: -100%;
  transform: translateX(100%);
}
.carousel .carousel-container .carousel-item {
  display: block;
  position: relative;
  flex: 1 0 100%;
}
.carousel .carousel-container .carousel-item.has-background .is-background {
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
}
.carousel .carousel-container .carousel-item .title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.5em;
  margin: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
}
.carousel .carousel-navigation {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.carousel .carousel-navigation .carousel-nav-left,
.carousel .carousel-navigation .carousel-nav-right {
  padding: 1em;
}
.carousel .carousel-navigation.is-centered {
  justify-content: center;
}
.carousel .carousel-navigation.is-overlay {
  align-items: center;
  justify-content: space-between;
  z-index: 20;
}
.carousel .carousel-navigation.is-overlay .carousel-nav-left,
.carousel .carousel-navigation.is-overlay .carousel-nav-right {
  height: 2.2em;
  width: 2em;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4a4a4a;
  z-index: 99;
}
.carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,
.carousel .carousel-navigation.is-overlay .carousel-nav-right:hover {
  cursor: pointer;
}
.carousel .carousel-navigation.is-overlay .carousel-nav-right {
  left: auto;
  right: 0;
}
.carousel.is-reversing .carousel-container {
  transform: translateX(-100%);
}
.carousel.is-reversing.is-2 .carousel-container {
  transform: translateX(calc(-100% / 2));
}
.carousel.is-reversing.is-3 .carousel-container {
  transform: translateX(calc(-100% / 3));
}
.carousel.is-reversing.is-4 .carousel-container {
  transform: translateX(calc(-100% / 4));
}
.carousel.is-reversing.is-5 .carousel-container {
  transform: translateX(calc(-100% / 5));
}
.carousel.is-2 .carousel-container {
  left: calc(-100% / 2);
  transform: translateX(calc(100% / 2));
}
.carousel.is-2 .carousel-container .carousel-item {
  padding: 1em;
  flex-basis: calc(100% / 2);
}
.carousel.is-3 .carousel-container {
  left: calc(-100% / 3);
  transform: translateX(calc(100% / 3));
}
.carousel.is-3 .carousel-container .carousel-item {
  padding: 1em;
  flex-basis: calc(100% / 3);
}
.carousel.is-4 .carousel-container {
  left: calc(-100% / 4);
  transform: translateX(calc(100% / 4));
}
.carousel.is-4 .carousel-container .carousel-item {
  padding: 1em;
  flex-basis: calc(100% / 4);
}
.carousel.is-5 .carousel-container {
  left: calc(-100% / 5);
  transform: translateX(calc(100% / 5));
}
.carousel.is-5 .carousel-container .carousel-item {
  padding: 1em;
  flex-basis: calc(100% / 5);
}

.hero.has-carousel {
  position: relative;
}
.hero.has-carousel + .hero-body,
.hero.has-carousel + .hero-head,
.hero.has-carousel + .hero-footer {
  z-index: 1;
}
.hero.has-carousel .hero-carousel {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: auto;
  border: none;
  margin: auto;
  padding: 0;
  z-index: 0;
}

.hero-carousel {
  position: relative;
  overflow: hidden;
}
.hero-carousel .carousel-container {
  width: 100%;
  position: relative;
  border: none;
  display: flex;
  margin: 0;
  padding: 0;
  left: -100%;
  transform: translateX(100%);
}
.hero-carousel .carousel-container .carousel-item {
  display: block;
  position: relative;
  flex: 1 0 100%;
}
.hero-carousel .carousel-container .carousel-item.has-background .is-background {
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
}
.hero-carousel .carousel-container .carousel-item .title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.5em;
  margin: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
}
.hero-carousel .carousel-navigation {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.hero-carousel .carousel-navigation .carousel-nav-left,
.hero-carousel .carousel-navigation .carousel-nav-right {
  padding: 1em;
}
.hero-carousel .carousel-navigation.is-centered {
  justify-content: center;
}
.hero-carousel .carousel-navigation.is-overlay {
  align-items: center;
  justify-content: space-between;
  z-index: 20;
}
.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left,
.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right {
  height: 2.2em;
  width: 2em;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4a4a4a;
  z-index: 99;
}
.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,
.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right:hover {
  cursor: pointer;
}
.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right {
  left: auto;
  right: 0;
}
.hero-carousel.is-reversing .carousel-container {
  transform: translateX(-100%);
}
.hero-carousel.is-reversing.is-2 .carousel-container {
  transform: translateX(calc(-100% / 2));
}
.hero-carousel.is-reversing.is-3 .carousel-container {
  transform: translateX(calc(-100% / 3));
}
.hero-carousel.is-reversing.is-4 .carousel-container {
  transform: translateX(calc(-100% / 4));
}
.hero-carousel.is-reversing.is-5 .carousel-container {
  transform: translateX(calc(-100% / 5));
}

.carousel.carousel-animate-slide.carousel-animated .carousel-container,
.hero-carousel.carousel-animate-slide.carousel-animated .carousel-container {
  transform: none;
  transition: transform 0.5s ease-in-out;
}
.carousel.carousel-animate-fade .carousel-item,
.hero-carousel.carousel-animate-fade .carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
}
.carousel.carousel-animate-fade .carousel-item.is-active,
.hero-carousel.carousel-animate-fade .carousel-item.is-active {
  opacity: 1;
}
.carousel.carousel-animate-fade .carousel-item:not(.is-active),
.hero-carousel.carousel-animate-fade .carousel-item:not(.is-active) {
  opacity: 0;
}
.material-icons{
  cursor:pointer;
}
.p-2{
  float:left;
  width:100%;
  margin:5px auto;
  font-size:29px;
}
.p-2 span:nth-child(1){
  float:left;
  margin-top:14px;
}
.p-2 span:nth-child(2){
float:right;
}
</style>


