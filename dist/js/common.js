
$( document ).ready(function() {
	// Video background YouTube
	$('#video-bg').YTPlayer({
		fitToBackground: true,
		videoId: 'W4Zkq8AYZfI',
		pauseOnScroll: false,
		playerVars: {
			modestbranding: 0,
			autoplay: 1,
			repeat: true,
			controls: 0,
			showinfo: 0,
			wmode: 'transparent',
			branding: 0,
			rel: 0,
			autohide: 0,
			start: 1,
			origin: window.location.origin
		}
	});


	// masked input
	$(function () {
	  $.mask.definitions['~'] = "[+-]";
	  //$("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
	  //$("#phone").mask("(999) 999-9999");
	  //$("#phoneExt").mask("(999) 999-9999? x99999");
	  $(".masked-input").mask("8(999)-999-99-99", {
	      placeholder: " "
	  });
	  //$("#tin").mask("99-9999999");
	  //$("#ssn").mask("999-99-9999");
	  //$("#product").mask("a*-999-a999", { placeholder: " " });
	  //$("#eyescript").mask("~9.99 ~9.99 999");
	  //$("#po").mask("PO: aaa-999-***");
	  //$("#pct").mask("99%");
	  //$("input").blur(function() {
	  //    $("#info").html("Unmasked value: " + $(this).mask());
	  //}).dblclick(function() {
	  //    $(this).unmask();
	  //});
	});



		// equalHeights
	$('.goodies_descr').equalHeights();

	// form
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "js/mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$('.form-thanks .thanks_wrapper').addClass('active');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					$.fancybox.close();
				}, 5000);
			});
			return false;
		});

	//slick slider
	$(".promo-carousel").slick({

		// promo-carousel
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		lazyLoad: 'ondemand', // ondemand progressive anticipated
	  autoplay: true,
	  autoplaySpeed: 2000,

		// the magic
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 4,
				infinite: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: false
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				dots: false,
				arrows: false
			}
		}
		]
	});

	$(".option_goodies_slider").slick({

		// goodies options...
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		lazyLoad: 'ondemand', // ondemand progressive anticipated
	  autoplay: true,
	  autoplaySpeed: 4000,

		// the magic
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				infinite: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: false
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		}
		]
	});

	$(".feedback_slider").slick({

	// feedback options...
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  // adaptiveHeight: true,

	// the magic
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 1,
			infinite: true
		}
	},
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			dots: true
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			dots: false
		}
	},
	{
		breakpoint: 500,
		settings: {
			slidesToShow: 1,
			dots: false,
			arrows: false,
		}
	}
	]
	});

// collapse reasons
var windowWidth = $(window).width();
  if(windowWidth <= 500) //for iPad & smaller devices
     $('.reason_hidden').addClass('hidden');

// collapse какой-то фигни, не помню какой
	$('.section_reason > .container > .row > .show_more').click(function() {
		$('.section_reason > .container > .row > .reason_hidden').removeClass('hidden');
		$('.section_reason > .container > .row > .show_more').addClass('showncontent');
  });

  // cookies message
	$('.cookies_message_wrap > .container > .cookies_message_close').click(function() {
		$('.cookies_message_wrap').addClass('hidden');
  });


	// form switcher
	$('button[data-src="#form-callback"]').on('click', function() {
	  var metrika = $(this).data('fmetrika');
	  var header = $(this).data('fhead');
	  var info = $(this).data('finfo');
	  $('.popup-callback').attr('onsubmit', metrika);
	  $('.popup-callback h3').text(header);
	  $('.popup-callback [name=form_subject]').val(info);
	});

	$('a[data-src="#form-callback"]').on('click', function() {
	  var metrika = $(this).data('fmetrika');
	  var header = $(this).data('fhead');
	  var info = $(this).data('finfo');
	  $('.popup-callback').attr('onsubmit', metrika);
	  $('.popup-callback h3').text(header);
	  $('.popup-callback [name=form_subject]').val(info);
	});




// counter

// function getTimeRemaining(endtime) {
// 	var t = Date.parse(endtime) - Date.parse(new Date());
// 	var seconds = Math.floor((t / 1000) % 60);
// 	var minutes = Math.floor((t / 1000 / 60) % 60);
// 	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
// 	var days = Math.floor(t / (1000 * 60 * 60 * 24));
// 	return {
// 		'total': t,
// 		'days': days,
// 		'hours': hours,
// 		'minutes': minutes,
// 		'seconds': seconds
// 	};
// }

// function initializeClock(id, endtime) {
// 	var clock = document.getElementById(id);
// 	var daysSpan = clock.querySelector('.days');
// 	var hoursSpan = clock.querySelector('.hours');
// 	var minutesSpan = clock.querySelector('.minutes');
// 	var secondsSpan = clock.querySelector('.seconds');

// 	function updateClock() {
// 		var t = getTimeRemaining(endtime);

// 		daysSpan.innerHTML = t.days;
// 		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
// 		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
// 		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

// 		if (t.total <= 0) {
// 			clearInterval(timeinterval);
// 		}
// 	}

// 	updateClock();
// 	var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline="May 08 2018 23:59:00 GMT+0300"; //for Russia
// // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
// initializeClock('clockdiv', deadline);








  // slidebar

( function ( $ ) {
        // Initialize Slidebars
        // Init
		var controller = new slidebars();
		controller.init();

		// Toggle main menu
		$( '.js-toggle-main-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'main-menu' );
		} );

		// Toggle author menu
		$( '.js-toggle-author-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'author-menu' );
		} );

		// Toggle help menu
		$( '.js-toggle-help-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'help-menu' );
		} );

		// Toggle demo menu
		$( '.js-toggle-demos-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demos-menu' );
		} );

		// Close any
		$( document ).on( 'click', '.js-close-any', function ( event ) {
			if ( controller.getActiveSlidebar() ) {
				event.preventDefault();
				event.stopPropagation();
				controller.close();
			}
		} );

		// Close Slidebar links
		$( '[off-canvas] a' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();

			var url = $( this ).attr( 'href' ),
			target = $( this ).attr( 'target' ) ? $( this ).attr( 'target' ) : '_self';

			controller.close( function () {
				window.open( url, target );
			} );
		} );

		// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'opening', function ( event ) {
			$( '[canvas]' ).addClass( 'js-close-any' );
		} );

		// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'closing', function ( event ) {
			$( '[canvas]' ).removeClass( 'js-close-any' );
		} );
        // Left demo
        $( '.js-open-demo-left' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-left' );
		} );

        $( '.js-toggle-demo-left' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-left' );
		} );

        $( '.js-close-demo-left' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-left' );
		} );

        // Right demo
        $( '.js-open-demo-right' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-right' );
		} );

        $( '.js-toggle-demo-right' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-right' );
		} );

        $( '.js-close-demo-right' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-right' );
		} );

        // Top demo
  //       $( '#slidbar-open' ).on( 'click', function ( event ) {
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// 	controller.open( 'demo-top' );
		// } );

    $( '#slidbar-open' ).on( 'click', function ( event ) {
				event.preventDefault();
				event.stopPropagation();
				controller.toggle( 'demo-top' );
			}
		);

        $( '.close-sidebar-button' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-top' );
		} );

        // Bottom demo
    $( '.js-open-demo-bottom' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-bottom' );
		} );

    $( '.js-toggle-demo-bottom' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-bottom' );
		} );

        $( '.js-close-demo-bottom' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-bottom' );
		} );

        // Left 2 demo
        $( '.js-open-demo-left-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-left-2' );
		} );

        $( '.js-toggle-demo-left-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-left-2' );
		} );

        $( '.js-close-demo-left-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-left-2' );
		} );

        // Reveal demo
        $( '.js-open-demo-reveal' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-reveal' );
		} );

        $( '.js-toggle-demo-reveal' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-reveal' );
		} );

        $( '.js-close-demo-reveal' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-reveal' );
		} );

        // Push demo
        $( '.js-open-demo-push' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-push' );
		} );

        $( '.js-toggle-demo-push' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-push' );
		} );

        $( '.js-close-demo-push' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-push' );
		} );

        // Overlay demo
        $( '.js-open-demo-overlay' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-overlay' );
		} );

        $( '.js-toggle-demo-overlay' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-overlay' );
		} );

        $( '.js-close-demo-overlay' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-overlay' );
		} );

        // Shift demo
        $( '.js-open-demo-shift' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-shift' );
		} );

        $( '.js-toggle-demo-shift' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-shift' );
		} );

        $( '.js-close-demo-shift' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-shift' );
		} );

        // Mobile only
        var windowWidth,
        mobileOnly = function () {
            windowWidth = $( window ).width();

            if ( windowWidth > 600 ) {
                controller.close( 'demo-mobile-only' );
            }
        };

        mobileOnly();
        $( window ).on( 'resize', mobileOnly );

        $( '.js-open-demo-mobile-only' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();

            if ( windowWidth < 601 ) {
                controller.open( 'demo-mobile-only' );
            }
		} );

        $( '.js-toggle-demo-mobile-only' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();

            if ( windowWidth < 601 ) {
                controller.toggle( 'demo-mobile-only' );
            }
		} );

        $( '.js-close-demo-mobile-only' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-mobile-only' );
		} );

        // Custom fixed width
        $( '.js-open-demo-custom-fixed-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-fixed-width' );
		} );

        $( '.js-toggle-demo-custom-fixed-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-fixed-width' );
		} );

        $( '.js-close-demo-custom-fixed-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-fixed-width' );
		} );

        // Custom fluid height
        $( '.js-open-demo-custom-fluid-height' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-fluid-height' );
		} );

        $( '.js-toggle-demo-custom-fluid-height' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-fluid-height' );
		} );

        $( '.js-close-demo-custom-fluid-height' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-demo-custom-fluid-height' );
		} );

        // Custom responsive width
        $( '.js-open-demo-custom-responsive-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-responsive-width' );
		} );

        $( '.js-toggle-demo-custom-responsive-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-responsive-width' );
		} );

        $( '.js-close-demo-custom-responsive-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-responsive-width' );
		} );

        // Custom transition duration
        $( '.js-open-demo-custom-transition-duration' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-transition-duration' );
		} );

        $( '.js-toggle-demo-custom-transition-duration' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-transition-duration' );
		} );

        $( '.js-close-demo-custom-transition-duration' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-transition-duration' );
		} );

        // Custom transition duration 2
        $( '.js-open-demo-custom-transition-duration-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-transition-duration-2' );
		} );

        $( '.js-toggle-demo-custom-transition-duration-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-transition-duration-2' );
		} );

        $( '.js-close-demo-custom-transition-duration-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-transition-duration-2' );
		} );

        // Events
        $( '.js-events-init' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.init();
		} );

        $( '.js-events-exit' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.exit();
		} );

        $( '.js-events-css' ).on( 'click', function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            controller.css();
        } );

        $( '.js-open-demo-events' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-events' );
		} );

        $( '.js-toggle-demo-events' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-events' );
		} );

        $( '.js-close-demo-events' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-events' );
		} );

        // Event demo listeners
        if ( /demos\/events/.test( window.location.href ) ) {
            $( controller.events ).on( 'init', function () {
                console.log( 'init - Slidebars has been initialized.' );
            } );

            $( controller.events ).on( 'exit', function () {
                console.log( 'exit - Slidebars has been disabled.' );
            } );

            $( controller.events ).on( 'css', function () {
                console.log( 'css - Slidebars css has been reset.' );
            } );

            $( controller.events ).on( 'opening', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'opening - The events demo Slidebar is opening.' );
                }
            } );

            $( controller.events ).on( 'opened', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'opened - The events demo Slidebar is opened.' );
                }
            } );

            $( controller.events ).on( 'closing', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'closing - The events demo Slidebar is closing.' );
                }
            } );

            $( controller.events ).on( 'closed', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'closed - The events demo Slidebar is closed.' );
                }
            } );
        }

        // Callbacks demo
        $( '.js-callbacks-init' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.init( function () {
                console.log( 'This message was logged by a callback after initializing Slidebars.' );
            } );
		} );

        $( '.js-callbacks-exit' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.exit( function () {
                console.log( 'This message was logged by a callback after exiting Slidebars.' );
            } );
		} );

        $( '.js-callbacks-css' ).on( 'click', function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            controller.css( function () {
                console.log( 'This message was logged by a callback after resetting Slidebars CSS.' );
            } );
        } );

        $( '.js-open-demo-callbacks' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-callbacks', function () {
                console.log( 'This message was logged by a callback after opening the Slidebar.' );
            } );
		} );

        $( '.js-toggle-demo-callbacks' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-callbacks', function () {
                console.log( 'This message was logged by a callback after toggling the Slidebar.' );
            }  );
		} );

        $( '.js-close-demo-callbacks' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-callbacks', function () {
                console.log( 'This message was logged by a callback after closing the Slidebar.' );
            }  );
		} );

      } ) ( jQuery );






});

