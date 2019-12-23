$(function() {
	$('.slider').slick({
		prevArrow:"<div class='arrow arrow-prev'></div>",
	    nextArrow:"<div class='arrow arrow-next'></div>"
	});

	document.body.addEventListener('click', function(e) {
	  if (e.target.matches('button')) {
	    console.log('btn!')
	    const icon = e.target.closest('div.add-to-inner').querySelector('.add-to .icon')
	    icon.classList.add('visible')
	  }
	})

	function backToTop() {

		let button = $('.up');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 668) {
		  		button.fadeIn();
			} else {
			  button.fadeOut();
			}
		});

		button.on('click', (e) => {
			e.preventDefault();
			$('html').animate({scrollTop: 0}, 1000);
		})
		}

	backToTop();

	$('.btn-menu').on('click', function(){
		$('.main-menu').slideToggle();
	});

});
