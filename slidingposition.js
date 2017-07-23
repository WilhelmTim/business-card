(function($){
		function title()	{
			if(position<15)	{
				$('#title').replaceWith("<span id='title'>Junior Developer</span>");
			} else if(position>15 && position<34)	{
				$('#title').replaceWith("<span id='title'>O mnie</span>");
			} else if(position>34 && position<51)	{
				$('#title').replaceWith("<span id='title'>Praca</span>");
			}else if(position>51 && position<68)	{
				$('#title').replaceWith("<span id='title'>Umiejętności</span>");
			}else if(position>68 && position<85)	{
				$('#title').replaceWith("<span id='title'>Moje skrypty</span>");
			}else if(position>85 && position<105)	{
				$('#title').replaceWith("<span id='title'>Kontakt/linki</span>");
			};
	};
var height = $(window).height();
height=height*6;
		setInterval(function(){ 
		 position = $('.header').offset().top;
		position	=	(position/height)*120;
		$('#progres-bar').css({width: position+'%'});
		if(position>1)	{
			$('.header').animate({backgroundColor : 'rgba(0, 0, 0, 1)'},300);
						} else	{
			$('.header').animate({backgroundColor : 'rgba(0, 0, 0, 0.2)'},200);
						};

		title();
		}, 300);

	
})(jQuery);