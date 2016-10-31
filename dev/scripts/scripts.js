/*global jQuery*/

jQuery(document).ready(function($) {
    
    var device_width = $(window).width();

    // mobile nav menu script

    $(".menu").on('click', function(event) {

        // increase the width of the nav.mobile
        $("nav.mobile").animate({
            'width': '250px',
            'direction': 'left'
        }, 500);

    });

    $(".title-bar button").on('click', function(event) {
        event.preventDefault();

        // change the width of the nav.mobile to 0
        $("nav.mobile").animate({
            'width': '0',
            'direction': 'left'
        }, 500);
    });

    // mobile search bar scripts

    $("button.search-button").on('click', function(event) {
        event.preventDefault();

        // toggle the visibility of search bar
        $("#search-mobile").animate({
            'left': '0'
        }, 500);
        
        $("#search-mobile input").focus();

    });
    
    $("button.search-close").on('click', function(event){
       event.preventDefault();
       
       // hide the search bar
       $("#search-mobile").animate({
           'left': device_width
       }, 500);
        
    });

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        var mobilestate = $("#mobile-header").css('display');

        if (scroll > 80) {
            if (mobilestate != 'block') {
                $("#sticky-header").fadeIn(100);
                $(".sticky-search input").focus();
            }
            $(".scrolltop").fadeIn();
        } else {
            $(".scrolltop").fadeOut(100);
            $("#sticky-header").fadeOut();
            $(".search-desktop input[type='text'").focus();
        }
    });

    $(".scrolltop").on('click', function(event) {
        event.preventDefault();

        // scroll window to top
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

});
