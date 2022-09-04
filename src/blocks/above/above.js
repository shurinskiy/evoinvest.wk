(() => {

	$("a[href='#top']").on('click', function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
})();
