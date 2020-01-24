$(function() {
	autosize($('textarea'));
});

$(document).ready(function() {

	$('.submenu_link').on('click', function(event) {
		
		var main_menu = $('.nav-menu');
		var id = $(this).data('submenu');

		if (id) {
			event.preventDefault();

			$('[data-submenu_item]').hide();

			main_menu.addClass('show_submenu');
			$('[data-submenu_item='+ id +']').fadeIn();

		} else {
			main_menu.removeClass('show_submenu');
			$('[data-submenu_item]').hide();
			return true;
		}

		$(document).mouseup(function (e) {
		    var container = $('.nav-menu');
		    if (container.has(e.target).length === 0){
				$('[data-submenu_item]').hide();
		        container.removeClass('show_submenu');
		    }
		});

		console.log(id);

	});

	$('.mobile-submenu_link').on('click', function(event) {
		
		var id = $(this).data('menu');

		if (id) {

			if ($('[data-menu_item='+ id +']').css('display') == 'block') {
				$('[data-menu_item='+ id +']').slideUp();

				return false;
			}

			event.preventDefault();

			$('[data-menu_item]').slideUp();
			$('[data-menu_item='+ id +']').slideDown();

		} else {
			return true;
		}

	});

	$('.custom_tooltip-container').on('click', function(event) {
		var tooltip = $(this).data('custom_tooltip');

		$('[data-custom_tooltip_item='+ tooltip +']').fadeIn();
	})

	$(".anchor_link").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 150 + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		
		return false;
	});

	$('.big__slider-container').slick({
		// infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		asNavFor: '.big__slider-dots_container',
		fade: true,
	});

	$('.big__slider-dots_container').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.big__slider-container',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				centerMode: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$('.main__service-slider-container').slick({
		slidesToShow: 5,
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		infinite: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$(".parallelogram__content-slider").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		navElement: 'div class="custom_button-nav p__c-s_nav"',
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:1,
			}
		}
	});


	$(".f__c-section_first-slider").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		navElement: 'div class="custom_button-nav f__c-s_f-s_nav owl_footer__slider"',
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:1,
			}
		}
	});

	$('.p__c-s_nav').parent('.owl-nav').appendTo('.p-i__content-second');
	// $('.f__c-s_f-s_nav').parent('.owl-nav').appendTo('.f__c-s_f-footer');

})

function showDropdown(value) {
	var block = $('[data-dropdown_list='+ value +']');
	if (block.hasClass('active')) {
		block.slideUp();
		block.removeClass('active');
	} else {
		block.slideDown();
		block.addClass('active');
	}

}

$(document).mouseup(function (e) {
    var container = $('.nav-menu');
    if (container.has(e.target).length === 0){
        container.removeClass('show_submenu');
    }
});

$(document).mouseup(function (e) {
    var container = $('.custom_tooltip-item');
    if (container.has(e.target).length === 0){
		container.fadeOut();
    }
});

function showBlock(str) {
	
	var block = $('[data-tab='+ str +']');
	var tab_block = $('[data-tab_block='+ str +']');

	$('.tab_block').removeClass('active'); 
	block.hide();


	tab_block.addClass('active');
	$('[data-tab]').removeClass('active');
	block.addClass('active');
	block.show();

}

function showMobileMenu() {
	
	var menu_content = $('.mobile-menu_block');

	if (menu_content.hasClass('active')) {
		menu_content.removeClass('active');
	} else {
		menu_content.addClass('active');
	}

}