$(function () {

    "use strict";

    //===== Prealoder
    $(window).load(function() {
        $("#loading").fadeOut(500);
    });

    

    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });
    var bodyOvrelay = $('#body-overlay');
    var searchPopup = $('#search-popup');
    var sidebarMenu = $('#sidebar-menu');

    $(document).on('click', '#body-overlay', function (e) {
        e.preventDefault();
        bodyOvrelay.removeClass('active');
        searchPopup.removeClass('active');
        sidebarMenu.removeClass('active');
    });

    // sidebar menu 
    $(document).on('click', '.sidebar-menu-close', function (e) {
        e.preventDefault();
        bodyOvrelay.removeClass('active');
        sidebarMenu.removeClass('active');
    });
    $(document).on('click', '#navigation-button', function (e) {
        e.preventDefault();
        sidebarMenu.addClass('active');
        bodyOvrelay.addClass('active');
    });
    $(document).on('click', '#search', function (e) {
        e.preventDefault();
        searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
    });

            //===== seller Active slick slider
            $('.team-1-carousel-active').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 3000,
                arrows: true,
                prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
                nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
                speed: 1500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 3,
                        }
                },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                }
              ]
            });

        //===== seller Active slick slider
    $('.team-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });







        //===== seller Active slick slider
    $('.testinonials-active, .service-active, .event-details-page-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        }
      ]
    });

    //===== team Active slick slider
    $('.team-carousel-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
        ]
    });

      //===== about-page-testimonial-active
      $('.about-page-testimonial-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
        ]
    });

    //===== seller Active slick slider
    $('.brnd-wrapper-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 6,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
        }
        ]
    });




        //===== seller Active slick slider
        $('.testimonial-3-active').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                    }
            },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
            }
            ]
        });

               //===== seller Active slick slider
               $('.brand-logo-area-carousel').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
                nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
                speed: 1500,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 6,
                        }
                },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 6,
                        }
                },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                        }
                },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                        }
                }
                ]
            });

           //===== seller Active slick slider
           $('.brand-slide').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 1500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 6,
                    }
            },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
            }
            ]
        });

        //===== seller Active slick slider

        $('.product-thumb').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,    
            fade: false,
            asNavFor: '.product-item-slide',
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"><i class="far fa-angle-left"></i></span>',
            nextArrow: '<span class="next"><i class="far fa-angle-right"></i></span>',

        });
        $('.product-item-slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-thumb',
            dots: false,
            centerMode: true,
            arrows: false,
            centerPadding: "0",
            focusOnSelect: true,
            responsive: [

                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
            }
          ]
        });


    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    //===== Isotope Project 1

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.project-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe',
        // other options
    });

    $('.video-popup-two').magnificPopup({
        type: 'iframe',
        // other options
    });
    



    //===== Syotimer js
    $('#simple_timer').syotimer({
        year: 2020,
        month: 2,
        day: 29,
      hour: 20,
      minute: 30,
    });


    


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

        //===== Magnific Popup

        $('.image-popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    //===== Magnific Popup

    $('.popup-footer-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //===== Magnific Popup
    new WOW().init();


    //===== product quantity

    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    


    // Go to Top
    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });


    //Animate the scroll to yop
    $('#clock').countdown('2020/10/10', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
      });

});
