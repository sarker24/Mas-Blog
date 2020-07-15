// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap"
import  "../stylesheets/application"
import  "../stylesheets/card"

document.addEventListener("turbolinks:load", () =>{
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up
    $(window).resize(function(){
        if ($(window).width() >= 980){

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $( ".navbar .dropdown-menu" ).mouseleave(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });
// document ready
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
