$(function () {
    // slider
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fa fa-angle-left left"></i>',
        nextArrow: '<i class="fa fa-angle-right right"></i>',
        infinite: true,
        speed: 1000,
    });

    // portfolio venobox js
    $('.venobox').venobox();

    // counter up js
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });

    // blog slider
    $('.blog_main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        speed: 1000,
        dots: true,
    });

    // sponsor slider
    $('.spon_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        speed: 1000,
        prevArrow: '<i class="fa fa-angle-left left"></i>',
        nextArrow: '<i class="fa fa-angle-right right"></i>',
    });
});