$(document).ready(function(){
	
	//____________________main-menu-btn-toggle
	$('.main-menu__toggle-btn').on('click', function() {

		$('.main-menu__items').slideToggle(300, function() {

			if($(this).css('display') === 'none') {

				$(this).removeAttr('style');

			};
		});
	});	

	//____________________change_lang_marker
	$('.change-lang__btn').on('click', function() {
		$('.change-lang__btn').removeClass('change-lang__btn--active');
		$(this).toggleClass('change-lang__btn--active');
	});

	//____________________change_currency_marker
	$('.change-currency__btn').on('click', function() {
		$('.change-currency__btn').removeClass('change-currency__btn--active');
		$(this).toggleClass('change-currency__btn--active');
	});

	//____________________slider
	$('.slider__wrap').slick({
	    infinite: true,
	    dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1	        
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});	
});