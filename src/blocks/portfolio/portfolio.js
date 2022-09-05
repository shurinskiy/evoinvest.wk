(() => {

	let $items = $('.portfolio__items').find('.portfolio__item');

	if($items.length > 8)
		$('.portfolio__items').after("<span class='portfolio__more'>Показать все</span>");


	$('.portfolio').on('click', '.portfolio__more', function(e) {
		e.preventDefault();

		$(this)
			.parents('.portfolio')
			.find('.portfolio__item')
			.fadeIn()
			.end().end()
			.remove();
	});

})();
