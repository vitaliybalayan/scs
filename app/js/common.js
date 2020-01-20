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
		fade: true
	});

	$('.big__slider-dots_container').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.big__slider-container',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		// infinite: false
	});

	// $('.parallelogram__content-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	centerMode: true,
	// 	focusOnSelect: true,
	// 	arrows: true,
	// 	infinite: true
	// });

	$(".parallelogram__content-slider").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		navElement: 'div class="custom_button"',
	});

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