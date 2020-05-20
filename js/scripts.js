/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */

   var x, i, j, selElmnt, a, b, c;
   /* Look for any elements with the class "custom-select": */
   x = document.getElementsByClassName("custom-select");
   for (i = 0; i < x.length; i++) {
     selElmnt = x[i].getElementsByTagName("select")[0];
     /* For each element, create a new DIV that will act as the selected item: */
     a = document.createElement("DIV");
     a.setAttribute("class", "select-selected");
     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
     x[i].appendChild(a);
     /* For each element, create a new DIV that will contain the option list: */
     b = document.createElement("DIV");
     b.setAttribute("class", "select-items select-hide");
     for (j = 1; j < selElmnt.length; j++) {
       /* For each option in the original select element,
       create a new DIV that will act as an option item: */
       c = document.createElement("DIV");
       c.innerHTML = selElmnt.options[j].innerHTML;
       c.addEventListener("click", function(e) {
           /* When an item is clicked, update the original select box,
           and the selected item: */
           var y, i, k, s, h;
           s = this.parentNode.parentNode.getElementsByTagName("select")[0];
           h = this.parentNode.previousSibling;
           for (i = 0; i < s.length; i++) {
             if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("same-as-selected");
               for (k = 0; k < y.length; k++) {
                 y[k].removeAttribute("class");
               }
               this.setAttribute("class", "same-as-selected");
               break;
             }
           }
           h.click();
       });
       b.appendChild(c);
     }
     x[i].appendChild(b);
     a.addEventListener("click", function(e) {
       /* When the select box is clicked, close any other select boxes,
       and open/close the current select box: */
       e.stopPropagation();
       closeAllSelect(this);
       this.nextSibling.classList.toggle("select-hide");
       this.classList.toggle("select-arrow-active");
     });
   }
   
   function closeAllSelect(elmnt) {
     /* A function that will close all select boxes in the document,
     except the current select box: */
     var x, y, i, arrNo = [];
     x = document.getElementsByClassName("select-items");
     y = document.getElementsByClassName("select-selected");
     for (i = 0; i < y.length; i++) {
       if (elmnt == y[i]) {
         arrNo.push(i)
       } else {
         y[i].classList.remove("select-arrow-active");
       }
     }
     for (i = 0; i < x.length; i++) {
       if (arrNo.indexOf(i)) {
         x[i].classList.add("select-hide");
       }
     }
   }
   
   /* If the user clicks anywhere outside the select box,
   then close all select boxes: */
   document.addEventListener("click", closeAllSelect);



    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  

  var mainList = [
    "assets/img/main_pictures/6.png",
    "assets/img/main_pictures/1.png",
    "assets/img/main_pictures/2.png",
    "assets/img/main_pictures/3.png",
    "assets/img/main_pictures/4.png",
    "assets/img/main_pictures/5.png", 
    "assets/img/main_pictures/6.png",
    "assets/img/main_pictures/7.png",
    "assets/img/main_pictures/8.png",
    "assets/img/main_pictures/9.png",
    "assets/img/main_pictures/10.png"];

  var chartsList = [
    "observablehq-901cd562",
    "observablehq-d94478d0",
    "observablehq-e04a3803",
    "observablehq-0e2b0c82",
    "observablehq-cb38311b",
    "observablehq-e994e423",
    "observablehq-901cd562",
    "observablehq-619e3d29",
    "observablehq-dd16af16",
    "observablehq-b112ca83",
    "observablehq-c879f3b0"];


  var lyricList1 = [
    "assets/img/lyrics-viz/whole-song/6.png",
    "assets/img/lyrics-viz/whole-song/1.png",
    "assets/img/lyrics-viz/whole-song/2.png",
    "assets/img/lyrics-viz/whole-song/3.png",
    "assets/img/lyrics-viz/whole-song/4.png",
    "assets/img/lyrics-viz/whole-song/5.png", 
    "assets/img/lyrics-viz/whole-song/6.png",
    "assets/img/lyrics-viz/whole-song/7.png",
    "assets/img/lyrics-viz/whole-song/8.png",
    "assets/img/lyrics-viz/whole-song/9.png",
    "assets/img/lyrics-viz/whole-song/10.png"];

  var lyricList2 = [
    "assets/img/lyrics-viz/top-word/6.png",
    "assets/img/lyrics-viz/top-word/1.png",
    "assets/img/lyrics-viz/top-word/2.png",
    "assets/img/lyrics-viz/top-word/3.png",
    "assets/img/lyrics-viz/top-word/4.png",
    "assets/img/lyrics-viz/top-word/5.png", 
    "assets/img/lyrics-viz/top-word/6.png",
    "assets/img/lyrics-viz/top-word/7.png",
    "assets/img/lyrics-viz/top-word/8.png",
    "assets/img/lyrics-viz/top-word/9.png",
    "assets/img/lyrics-viz/top-word/10.png"];
  
  var lyricList3 = [
    "assets/img/lyrics-viz/top-sentence/6.png",
    "assets/img/lyrics-viz/top-sentence/1.png",
    "assets/img/lyrics-viz/top-sentence/2.png",
    "assets/img/lyrics-viz/top-sentence/3.png",
    "assets/img/lyrics-viz/top-sentence/4.png",
    "assets/img/lyrics-viz/top-sentence/5.png", 
    "assets/img/lyrics-viz/top-sentence/6.png",
    "assets/img/lyrics-viz/top-sentence/7.png",
    "assets/img/lyrics-viz/top-sentence/8.png",
    "assets/img/lyrics-viz/top-sentence/9.png",
    "assets/img/lyrics-viz/top-sentence/10.png"];

  var barList1 = [
    "assets/img/bar_chart/6.png",
    "assets/img/bar_chart/1.png",
    "assets/img/bar_chart/2.png",
    "assets/img/bar_chart/3.png",
    "assets/img/bar_chart/4.png",
    "assets/img/bar_chart/5.png", 
    "assets/img/bar_chart/6.png",
    "assets/img/bar_chart/7.png",
    "assets/img/bar_chart/8.png",
    "assets/img/bar_chart/9.png",
    "assets/img/bar_chart/10.png"];
  var barList2 = [
    "assets/img/bar_chart/6.png",
    "assets/img/bar_chart/1.png",
    "assets/img/bar_chart/2.png",
    "assets/img/bar_chart/3.png",
    "assets/img/bar_chart/4.png",
    "assets/img/bar_chart/5.png", 
    "assets/img/bar_chart/6.png",
    "assets/img/bar_chart/7.png",
    "assets/img/bar_chart/8.png",
    "assets/img/bar_chart/9.png",
    "assets/img/bar_chart/10.png"];

var audioList = ["none","danceability", "energy", "acousticness", "instrumentalness", "liveness", "speechiness", "tempo", "valence", "mode"]



var feature0 = ["","","","","","","","","","",""]
var feature1 = ["","https://i.ibb.co/m493MCs/1.png","https://i.ibb.co/56J55yh/2.png","https://i.ibb.co/892n10W/3.png","https://i.ibb.co/vxk8Syd/4.png","https://i.ibb.co/19gv1t4/5.png","https://i.ibb.co/zfHKGmV/6.png","https://i.ibb.co/h8WT4xW/7.png","https://i.ibb.co/ysvyLrt/8.png","https://i.ibb.co/sC2JBSq/9.png","https://i.ibb.co/sChYc0k/10.png"];
var feature2 = ["","https://i.ibb.co/Mhy8zrY/1.png","https://i.ibb.co/0YKKMDX/2.png","https://i.ibb.co/Mhy8zrY/1.png","https://i.ibb.co/RDy73XK/4.png","https://i.ibb.co/Mhy8zrY/1.png","https://i.ibb.co/k69hP8n/6.png","https://i.ibb.co/Mhy8zrY/1.png","https://i.ibb.co/jHNrrZV/8.png","https://i.ibb.co/Mhy8zrY/1.png","https://i.ibb.co/tmP6521/10.png"];
var feature3 = ["",'https://i.ibb.co/gtD1gKc/boss-acousticness.png','https://i.ibb.co/9NBMr57/2.png','https://i.ibb.co/gtD1gKc/boss-acousticness.png','https://i.ibb.co/9NBMr57/2.png','https://i.ibb.co/gtD1gKc/boss-acousticness.png','https://i.ibb.co/9NBMr57/2.png','https://i.ibb.co/gtD1gKc/boss-acousticness.png','https://i.ibb.co/gtD1gKc/boss-acousticness.png','https://i.ibb.co/gtD1gKc/boss-acousticness.png','https://i.ibb.co/gtD1gKc/boss-acousticness.png'];
var feature4 = ["","https://i.ibb.co/Kx5zBfC/1.png","https://i.ibb.co/RB03Yc6/2.png","https://i.ibb.co/RB03Yc6/2.png","https://i.ibb.co/FDsgRP2/4.png","https://i.ibb.co/hyCMf1f/5.png","https://i.ibb.co/sQq7G1Y/6.png","https://i.ibb.co/RB03Yc6/2.png","https://i.ibb.co/RB03Yc6/2.png","https://i.ibb.co/hyCMf1f/5.png","https://i.ibb.co/RB03Yc6/2.png"];
var feature5 = ["","https://i.ibb.co/1TDG69C/1.png","https://i.ibb.co/hKB6PPN/2.png","https://i.ibb.co/DV9V5GX/3.png","https://i.ibb.co/n3VPnCR/4.png","https://i.ibb.co/n3VPnCR/4.png","https://i.ibb.co/QYhs3fY/6.png","https://i.ibb.co/rwM9zZ8/7.png","https://i.ibb.co/3sHWzDB/8.png","https://i.ibb.co/3pcZWx5/9.png","https://i.ibb.co/khJ9K9X/10.png"];
var feature6 = ["","https://i.ibb.co/6WP9f38/1.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/PMczt5S/2.png","https://i.ibb.co/GkNprnT/10.png"];
var feature7 = ["","https://i.ibb.co/C7r4Hm8/1.png","https://i.ibb.co/PhjH5CD/2.png","https://i.ibb.co/Gt3Vs4z/3.png","https://i.ibb.co/PhjH5CD/2.png","https://i.ibb.co/Gt3Vs4z/3.png","https://i.ibb.co/Gt3Vs4z/3.png","https://i.ibb.co/Gt3Vs4z/3.png","https://i.ibb.co/PhjH5CD/2.png","https://i.ibb.co/PhjH5CD/2.png","https://i.ibb.co/Gt3Vs4z/3.png"];
var feature8 = ["","https://i.ibb.co/BG5tw2Q/1.png","https://i.ibb.co/8dcXLp4/2.png","https://i.ibb.co/YfSjLMM/3.png","https://i.ibb.co/wRczJ2J/4.png","https://i.ibb.co/C6GRkHj/5.png","https://i.ibb.co/jGq03jC/6.png","https://i.ibb.co/vDfbVtc/7.png","https://i.ibb.co/HpJ39dd/8.png","https://i.ibb.co/28C87V4/9.png","https://i.ibb.co/dB2GDN0/10.png"];
var feature9 = ["","https://i.ibb.co/M9LMv5H/1.png","https://i.ibb.co/1TZTdrj/2.png","https://i.ibb.co/1TZTdrj/2.png","https://i.ibb.co/0mHZ7bc/4.png","https://i.ibb.co/0mHZ7bc/4.png","https://i.ibb.co/1TZTdrj/2.png","https://i.ibb.co/1TZTdrj/2.png","https://i.ibb.co/1TZTdrj/2.png","https://i.ibb.co/0mHZ7bc/4.png","https://i.ibb.co/1TZTdrj/2.png"];

var features = [feature0, feature1, feature2, feature3, feature4, feature5, feature6, feature7, feature8, feature9]

var playList =[ 
  "",
  "https://open.spotify.com/embed/track/4xqIYGwwZTEem9U8A42SPF",
  "https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4", 
  "https://open.spotify.com/embed/track/78qd8dvwea0Gosb6Fe6j3k", 
  "https://open.spotify.com/embed/track/43zdsphuZLzwA9k4DJhU0I", 
  "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b", 

  "https://open.spotify.com/embed/track/3ZCTVFBt2Brf31RLEnCkWJ",
  "https://open.spotify.com/embed/track/3PfIrDoz19wz7qK7tYeu62", 
  "https://open.spotify.com/embed/track/0nbXyq5TXYPCO7pr3N8S4I", 
  "https://open.spotify.com/embed/track/7k4t7uLgtOxPwTpFmtJNTY", 
  "https://open.spotify.com/embed/track/5yY9lUy8nbvjM1Uyo1Uqoc" 
]

var lyricList = ["everything","broken","lovely","boss","when","blind","everything","dont","box","tusa","life"]


$('#picDD').change(function () {
  var val = parseInt($('#picDD').val());
  console.log(val)

  $('div.main_png img').attr("src",mainList[val]);
  $('iframe').attr("src",playList[val]);

  var x = document.getElementsByClassName("test");
  for (var i = 0, n = x.length; i < n; ++i) {
    // get id property from element and set as innerHTML
    if (chartsList[val]==x[i].id){
      document.getElementById(chartsList[val]).style.display = 'block';
      } else{
      document.getElementById(x[i].id).style.display = "none";
      }
    }

    $('div.lyric_png-1 img').attr("src",lyricList1[val]);

    var y = document.getElementsByClassName("lyric_text");

    for (var i = 0, n = y.length; i < n; ++i) {
      console.log("in")
      if (lyricList[val]==y[i].id){
        document.getElementById(lyricList[val]).style.display = 'block';
        } else{
        document.getElementById(y[i].id).style.display = "none";
        }
      }
});

$('#picDD2').change(function () {
    var val = parseInt($('#picDD2').val());
    console.log(val)
    $('div.lyric_png-1 img').attr("src",lyricList1[val]);
    $('div.lyric_png-2 img').attr("src",lyricList2[val]);
    $('div.lyric_png-3 img').attr("src",lyricList3[val]);
    $('div.bar_png-1 img').attr("src",barList1[val]);
    $('div.bar_png-2 img').attr("src",barList2[val]);

    var x = document.getElementsByClassName("lyric_text");

    for (var i = 0, n = x.length; i < n; ++i) {
      console.log("in")
      if (lyricList[val]==x[i].id){
        document.getElementById(lyricList[val]).style.display = 'block';
        } else{
        document.getElementById(x[i].id).style.display = "none";
        }
      }

});


$( "#try_me" ).change(function () {
  var val = parseInt($('#try_me').val());
  // var val = $('#try_me').val();
  console.log("selected")
  console.log(val)
  var x = document.getElementsByClassName("audio_select");
  console.log("got elements")
  

  
  for (var i = 0, n = x.length; i < n; ++i) {
    if (audioList[val]==x[i].id){
      console.log("in")
      console.log(x[i].id)
      console.log(val)

      document.getElementById(audioList[val]).style.display = 'block';
      
      $('#track1').change(function () {
        var val2 = parseInt($('#track1').val());
        $('div.one image').attr("href",features[val][val2]);
        console.log("track1")
      });

      $('#track2').change(function () {
        var val2 = parseInt($('#track2').val());
        $('div.two image').attr("href",features[val][val2]);
        console.log("track2")
      });

      } else{
      document.getElementById(x[i].id).style.display = "none";
      console.log("out")
      }
    }

  });