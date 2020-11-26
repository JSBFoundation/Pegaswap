$(function() {
        // add class
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".header").addClass("header-fixed");
            } else {
                $(".header").removeClass("header-fixed");
            }
        });
    })
    // $(document).ready(function() {
    //     $('.me-menu ul li a').click(function() {
    //         var speed = 600;
    //         var href = $(this).attr("href");
    //         var target = $(href == "#" || href == "" ? 'html' : href);
    //         var hmenu = $('.header').height();
    //         var position = target.offset().top - hmenu;
    //         $('body,html').animate({ scrollTop: position }, speed, 'swing');
    //         return false;
    //     });
    // });