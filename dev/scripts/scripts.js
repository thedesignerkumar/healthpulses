jQuery(document).ready(function($) {

    // mobile nav menu script

    $("#menu").on('click', function(event) {

        // increase the width of the nav.mobile
        $("nav.mobile").css({
            'width': '300px'
        });

    });

    $(".close-nav button").on('click', function(event) {
        event.preventDefault();

        // change the width of the nav.mobile to 0
        $("nav.mobile").css({
            'width': '0'
        });
    });

    // mobile search bar scripts

    $("button.search").on('click', function(event) {
        event.preventDefault();

        // toggle the visibility of search bar
        $(".search-mobile").slideToggle(300);
        $(".search-mobile input").focus();

    });

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        var mobilestate = $("#nav-mobile").css('display');

        if (scroll > 180) {
            if (mobilestate != 'block') {
                $("#nav-sticky").slideDown(100);
                $(".search-sticky input").focus();
            }
            $(".scrolltop").fadeIn();
        } else {
            $(".scrolltop").fadeOut();
            $("#nav-sticky").slideUp(100);
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
