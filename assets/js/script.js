$(function () {

    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 180,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
        
    });

/*     $('#slider').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
      }); */


    // Scroll page

    var scrollLink = $('.scroll');

    scrollLink.click(function (e) {
        if (!$(this.hash).length)/* Retorna ao index se não encontrar ids */
            return location.href = location.href.match(/^http.*?.\w\//m)[0];

        e.preventDefault();

        $('body,html').animate({//this.hash - pega o valor do atributo id
            scrollTop: $(this.hash).offset().top
        }, 220)
    });

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