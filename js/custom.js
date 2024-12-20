/******************************************************************************************************************/
/* BRAX | Responsive Personal Portfolio Template                                                                  */
/* (c) 2018 Rene Puchinger                                                                                        */
/******************************************************************************************************************/
/* MAIN JAVASCRIPT                                                                                                */
/******************************************************************************************************************/

(function ($) {

    "use strict";

    var $window = $(window);
    var contentWrap = $("#content-wrap");
    var footerWrap = $("#footer-wrap");
    var portfolio = $('#portfolio');
	var video = $('#video');
    var portfolioItems = $('#portfolio-items', portfolio);
	var VideoItems = $('#video-items', video);
	

    $(document).on("ready", function () {


        var isMobile = false;
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

            isMobile = true;

        }

        /******************************************************************************************************************/
        /** PARALLAX                                                                                                      */
        /******************************************************************************************************************/
        if (!config_disableParalaxOnTouchDevices || !isMobile) {
            $window.stellar({horizontalScrolling: false, responsive: true});
        }


        /******************************************************************************************************************/
        /** TOP MENU                                                                                                      */
        /******************************************************************************************************************/
        adjustHeaderBg();
        $window.on("scroll", function () {
            adjustHeaderBg();
        });

        /* Set the width of the side navigation to 250px */
        window.openNav = function () {
            document.getElementById("mySidenav").style.width = "200px";
            document.getElementById("openNav").style.display = "none";
        };

        /* Set the width of the side navigation to 0 */
        window.closeNav = function () {
            document.getElementById("mySidenav").style.width = "0";
            setTimeout(function() { document.getElementById("openNav").style.display = "inline";}, 300);
        };

        /******************************************************************************************************************/
        /** SMOOTH SCROLL                                                                                                 */
        /******************************************************************************************************************/
        // Smooth scrolling navigation
        var body = $('body');
        var bodyHtml = $('body, html');
        var navbarItem = $('.navbar-nav a.nav-link', 'header');


        navbarItem.on("click", function (e) {
            if ($(e.target).is("a")) {
                var $this = $(e.target);
                var link = $this.attr('href');
                var pos = $(link).offset().top;
                bodyHtml.animate({scrollTop: pos}, 2000);
            }
            return false;
        });
        body.scrollspy({target: 'nav'});

        // make scrollspy on all links with class .scroll-link
        var scrollLink = $("a.scroll-link");
        scrollLink.on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                bodyHtml.animate({
                    scrollTop: $(hash).offset().top
                }, 2000, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
            return false;
        });


        /******************************************************************************************************************/
        /** FIX RESIZE                                                                                                    */
        /******************************************************************************************************************/
        $window.on("resize", function () {
            fixSkillsWidth();
            if (!isMobile) {
                var footerParaHeight = footerWrap.height();
                contentWrap.css("margin-bottom", footerParaHeight);
            }
        });


        /******************************************************************************************************************/
        /** PRETTY PHOTO                                                                                                  */
        /******************************************************************************************************************/
        var prettyPhoto = $("a[data-rel^='prettyPhoto']", portfolio);
        prettyPhoto.prettyPhoto({
            animationSpeed: 'slow',
            social_tools: false,
            theme: 'light_square',
            slideshow: false,
            overlay_gallery: false,
            deeplinking: false,
            show_title: true
        });


        /******************************************************************************************************************/
        /** ISOTOPE                                                                                                       */
        /******************************************************************************************************************/

        portfolioItems.imagesLoaded(function() {
            portfolioItems.isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            if (!isMobile) {
                var footerParaHeight = footerWrap.height();
                contentWrap.css("margin-bottom", footerParaHeight);
            }
        });

        // bind filter button click
        var filtersGroup = $('#filters-group', '#portfolio');
        filtersGroup.on('click', function (e) {
            if ($(e.target).is('a')) {
                var $this = $(e.target);
                var filterValue = $this.attr('data-filter');
                // use filterFn if matches value
                portfolioItems.isotope({filter: filterValue});
            }
            return false;
        });


/******************************************************************************************************************/
        /** PRETTY PHOTO - COPY PASTE HERE FOR VIDEO GALLERY                                                                                                  */
        /******************************************************************************************************************/
        var prettyVideo = $("a[data-rel^='prettyPhoto']", video);
        prettyPhoto.prettyPhoto({
            animationSpeed: 'slow',
            social_tools: false,
            theme: 'light_square',
            slideshow: false,
            overlay_gallery: false,
            deeplinking: false,
            show_title: true
        });


        /******************************************************************************************************************/
        /** ISOTOPE - COPY PASTE HERE FOR VIDEO GALLERY                                                                                                       */
        /******************************************************************************************************************/

        VideoItems.imagesLoaded(function() {
            VideoItems.isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            if (!isMobile) {
                var footerParaHeight = footerWrap.height();
                contentWrap.css("margin-bottom", footerParaHeight);
            }
        });

        // bind filter button click
        var filtersGroup = $('#filters-group', '#video');
        filtersGroup.on('click', function (e) {
            if ($(e.target).is('a')) {
                var $this = $(e.target);
                var filterValue = $this.attr('data-filter');
                // use filterFn if matches value
                VideoItems.isotope({filter: filterValue});
            }
            return false;
        });


        /******************************************************************************************************************/
        /** FLICKITY                                                                                                      */
        /******************************************************************************************************************/
        var testimonialsContent = $('#testimonials-content', '#testimonials');
        testimonialsContent.flickity({
            wrapAround: true,
            pageDots: true,
            prevNextButtons: false,
            autoPlay: 5000
        });


        /******************************************************************************************************************/
        /** CSS ANIMATION                                                                                                 */
        /******************************************************************************************************************/

        $('.animation').waypoint(function () {
            var el = $(this.element);
            var animation = el.attr('data-animation');
            el.css({'opacity': 1.0});
            el.addClass('animated ' + animation).delay(500);
        }, {
            offset: '100%'
        });

        /******************************************************************************************************************/
        /** PARALLAX FOOTER                                                                                               */
        /******************************************************************************************************************/
        if (!isMobile) {
            var footerParaHeight = footerWrap.height();
            contentWrap.css("margin-bottom", footerParaHeight);
        }

        /******************************************************************************************************************/
        /** FOOTER                                                                                                        */
        /******************************************************************************************************************/

        if (isMobile) {
            footerWrap.css({'position': 'relative'});
            contentWrap.css('margin-bottom', 0);
        }

    });


    /******************************************************************************************************************/
    /** TYPED                                                                                                   */
    /******************************************************************************************************************/
    var portfolioLink = $('.portfolio-link');
    if (config_typed) {
        document.addEventListener('DOMContentLoaded', function () {
            Typed.new('.typed', {
                strings: config_typedArray,
                typeSpeed: 0,
                loop: true,
                callback: function () {
                    portfolioLink.fadeTo(500, 1);
                }
            });
        });
    } else {
        portfolioLink.fadeTo(500, 1);
    }

    /******************************************************************************************************************/
    /** DEBOUNCED RESIZE                                                                                              */
    /******************************************************************************************************************/
    $window.on("debouncedresize", function (event) {
        portfolioItems.isotope();
    });


    /******************************************************************************************************************/
    /** HELPER FUNCTIONS                                                                                              */
    /******************************************************************************************************************/

    function addSourceToVideo(element, src, type) {
        var source = document.createElement('source');
        source.src = src;
        source.type = type;
        element.append(source);
    }

    function fixSkillsWidth() {
        var skillbarWrap = $('#skillbar-wrap');
        if ($window.width() >= 977 && $window.width() < 1200) {
            skillbarWrap.appendTo('#about .container .row');
            skillbarWrap.addClass('col-12');
        } else {
            skillbarWrap.removeClass('col-12');
            skillbarWrap.appendTo('#aboutRight');
        }
    }

    function adjustHeaderBg() {
        var navbar = $(".navbar", 'header');
        var scrollValue = $window.scrollTop();
        if (scrollValue > 76) {
            navbar.addClass('header-overlay');
        } else if (navbar.hasClass('header-overlay')) {
            navbar.removeClass('header-overlay');
        }
    }

    /******************************************************************************************************************/
    /** AJAX FORM                                                                                                     */
    /******************************************************************************************************************/
    // $(function () {
    //     // Get the form.
    //     var form = $('#contact-form');

    //     // Get the messages div.
    //     var formMessages = $('#form-messages');

    //     var ajaxLoad = $('#ajaxLoad');

    //     // Set up an event listener for the contact form.
    //     $(form).submit(function (e) {
    //         // Stop the browser from submitting the form.
    //         e.preventDefault();

    //         // Serialize the form data.
    //         var formData = $(form).serialize();

    //         form.css({opacity: 0.3});
    //         ajaxLoad.show();

    //         // Submit the form using AJAX.
    //         $.ajax({
    //             type: 'POST',
    //             url: $(form).attr('action'),
    //             data: formData
    //         }).done(function (response) {
    //             // Make sure that the formMessages div has the 'success' class.
    //             $(formMessages).removeClass('error');
    //             $(formMessages).addClass('success');
    //             // Set the message text.
    //             $(formMessages).text(response);
    //             // Clear the form.
    //             $('#name').val('');
    //             $('#email').val('');
    //             $('#subject').val('');
    //             $('#message').val('');
    //             form.css({opacity: 1});
    //             ajaxLoad.hide();
    //         }).fail(function (data) {
    //             // Make sure that the formMessages div has the 'error' class.
    //             $(formMessages).removeClass('success');
    //             $(formMessages).addClass('error');
    //             // Set the message text.
    //             if (data.responseText !== '') {
    //                 $(formMessages).text(data.responseText);
    //             } else {
    //                 $(formMessages).text('Oops! An error occured and your message could not be sent.');
    //             }
    //             form.css({opacity: 1});
    //             ajaxLoad.hide();
    //         });
    //     });
    // });

    /******************************************************************************************************************/
    /** PRELOADER                                                                                                     */
    /******************************************************************************************************************/
    $window.load(function () {
        $("#preloader").fadeOut("slow");
    });

})(jQuery);
