$(document).ready(function() {

    //menu
    $('.nav>li>a').click(function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass('open').slideToggle();
        $(this).parent().siblings().find('ul').removeClass('open').slideUp();

    });

    $('.logo').mouseleave(function(e) {
        e.preventDefault();
        $(this).find('.dropdown').removeClass('open').slideUp();

    });

    $(".btn").click(function(e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 800);
    });

    //rwd button
    $(".menu-btn").click(function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass('rwd');
        $(this).siblings().find('.dropdown').removeClass('open').slideUp();
    });









    //swiper
    var swiper = new Swiper('.swiper-container', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': '',
        'positionFromTop': 300

    })

});