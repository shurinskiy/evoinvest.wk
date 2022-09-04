(() => {
	const $toggle = $('.navi__toggle');
	const $shell = $('.navi');
	
	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$shell.toggleClass('opened');
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.navi')) {
			e.preventDefault();
			$shell.toggleClass('opened');
		}
	});

})();
