$(function () {


    // Owl carousel
    const owl = $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
    });

    $('.customNextBtn').click(() => owl.trigger('next.owl.carousel'));
    $('.customPrevBtn').click(() => owl.trigger('prev.owl.carousel'));


    //Fixa navbar
    const navbar = document.querySelector('nav.navbar');
    const headerHeight = document.querySelector('.header_info').offsetHeight;
    window.onscroll = () => {
        if (window.pageYOffset > headerHeight) {
            navbar.classList.add('navbar-fixed-top');
        } else {
            navbar.classList.remove('navbar-fixed-top');
        }
    }

});