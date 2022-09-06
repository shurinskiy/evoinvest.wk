(() => {

	$(".navi__menu").on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		let $element = $($(this).attr('href'));
	
		$("html, body").animate({ scrollTop: $element.offset().top }, "slow");
	});

})();
