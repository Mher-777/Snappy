$(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button class="animated fadeInDownBig arrows arrows-right"></button>',
        nextArrow: '<button class="animated fadeInDownBig arrows arrows-left"></button>',
        autoplay: true,
        infinite: true,
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.header').addClass('black').animate();
        }
        else {
            $('.header').removeClass('black');
        }
    });

    $('.fact__item-number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    new WOW().init();
})