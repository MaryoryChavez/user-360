/*--------------Desplasamiento Menu----------*/

$('.nave').on('click',function(){
	$('nav').toggleClass('mostrar');
})


/*--------------Menu----------*/
var altura = $('.header').offset().top;

$(window).on('scroll', function(){
	if ( $(window).scrollTop() > altura ){
		$('.header').addClass('menu-fixed');
	} else {
		$('.header').removeClass('menu-fixed');
	}
});
