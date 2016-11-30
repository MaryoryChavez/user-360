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


/*--------------Desplasamiento opciones----------*/
$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});