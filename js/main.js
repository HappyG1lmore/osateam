$(document).ready(function () {
    "use strict";
    //smooth scrolling
    $('html').smoothScroll(800);

    // new WOW().init();
    new WOW().init({mobile: true});
    //Portfolio
    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});

        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        // images have loaded

    });
    //Counter Up
    $('.counter').counterUp({delay: 10, time: 3000});
    //Image Light Box Popup
    $('.image-link').magnificPopup({type: 'image'});
    $('.video-link').magnificPopup({type: 'iframe'});
    // Animate loader off screen
    $('.se-pre-con').fadeOut('slow');

    // Show Navbar background on scroll
    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 100) {
            $('.navbar').css('background', 'RGBA(18, 24, 51, 1)');
        } else if ($('.navbar').css(
            'background',
            'linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)'
        )) {

            $('.navbar').css(
                'background',
                'linear-gradient(135deg, rgba(44, 51, 56, 0) 0%, rgba(44, 51, 56, 0) 100%)'
            );
        }
    });

});


    VANTA.FOG({
    el: "#slider",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
        highlightColor: 0x121833,
        midtoneColor: 0x121833,
        lowlightColor: 0x676c7a,
        baseColor: 0x121833,
        blurFactor: 0.32,
        speed: 0.80,
        zoom: 0.40
})
