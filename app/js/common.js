$(function() {

	// var owl = $('.owl-carousel');
	// owl.owlCarousel({
	// 	items: 1,
	// 	dots: false,
	// });


});

$(document).ready(function() {

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
    var container = $('.dropdown-_value');
    if (container.has(e.target).length === 0){
        container.slideUp();
        container.removeClass('active');
    }
});

function showBlock(str) {
	
	var block = $('[data-tab]');
	var tab_block = $('[data-tab_block='+ str +']');

	$('.tab_block').removeClass('active'); 
	block.hide();


	tab_block.addClass('active');
	$('[data-tab='+ str +']').show();

}

function showMobileMenu() {
	
	var menu_content = $('.mobile-menu_block');

	if (menu_content.hasClass('active')) {
		menu_content.removeClass('active');
	} else {
		menu_content.addClass('active');
	}

}