$(document).ready(function() {
	// Image slide header
	var slideCount = $('.slide').length;
	var slideWidth = $('.slide').width();
	var slideContainerWidth = slideCount * slideWidth;

	$('.slide-container').css('width', slideContainerWidth + 'px');

	var currentSlide = 0;

	function moveSlide() {
		currentSlide++;
		if (currentSlide === slideCount) {
			currentSlide = 0;
			$('.slide-container').css('left', '0px');
		} else {
			var newLeft = -currentSlide * slideWidth;
			$('.slide-container').animate({left: newLeft + 'px'}, 500);
		}
	}

	setInterval(moveSlide, 3000);
});
