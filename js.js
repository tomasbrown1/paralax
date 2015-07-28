$(window).scroll(function() {
	
	var wScroll = $(this).scrollTop();
	
	$('.earth').css({
		'transform' : 'translate(0px, ' + wScroll / 1.99 + '%)'
	});
	
	$('.logo').css({
		'transform' : 'translate(0px, ' + wScroll / 2 + '%)'
	});
	
	$('.asteroid').css({
		'transform' : 'translate(' + wScroll * -1.1 + 'px, ' + wScroll * 1.6 + 'px)'
	});
	
	$('.forground').css({
		'transform' : 'translate(0px, -' + wScroll / 30 + '%)'
	});
	
});