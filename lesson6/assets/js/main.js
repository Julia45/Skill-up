
 $(document).ready(() => {
 	$('.header-navbar__hamburger').click(function(){
 		$(this).toggleClass('active');
 		$('.header-navbar__list').toggleClass('active');
	});
 });
