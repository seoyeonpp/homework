$(function(){

	wheelAction = {
		$window: $(window),
		axisY : null,
		ST : null,
		init : function(){
			wheelAction.evtBinding();
		},
		evtBinding : function(){
			$('html, body').on('mousewheel', function( e ){
				wheelAction.ST = wheelAction.$window.scrollTop();
				wheelAction.axisY = e.deltaY ;
				if(wheelAction.axisY > 0){
					wheelAction.wheelUp();
				} else{
					wheelAction.wheelDown();
				};
			});
		},
		wheelUp : function(){
			if($(window).scrollTop() < 50){
                $('h1').removeClass('up');
                $('header').removeClass('up');
                $('nav span').removeClass('up');
                $('nav img').removeClass('up');
            };
		},
		wheelDown : function(){
			if(50 < $(window).scrollTop()){
                $('h1').addClass('up');
                $('header').addClass('up');
                $('nav span').addClass('up');
                $('nav img').addClass('up');
            };
        
		},
	};
	wheelAction.init();

	$(window).on('scroll', function(){

		var ST = $(window).scrollTop(),
			b = $(document).height() - $(window).height(),
			c = 0,
			d = 100
			valueT = ST * ( d - c ) / b + c,
            surf = $('.surf');


        console.log(valueT);
        
        $('nav span').css({'width': valueT + '%'});
        $('nav img').css({'left': valueT+ '%'});

        if(valueT < 70){
            if(valueT < 20){
                surf.css({'left': '10%', 'top':'50%', 'transform': 'rotate(10deg)'});
            }else if(valueT < 50){
                surf.css({'left': '30%', 'top':'30%', 'transform': 'rotate(-20deg)'});
            }else{
                surf.css({'left': '50%', 'top':'20%', 'transform': 'rotate(0deg)'});
                $('section.four p').css({'opacity':0, 'transform':'translateY(-100px)'});
                $('section.five span').removeClass('on');
                $('section.five p').removeClass('on');
            }
        }else if(70 <= valueT){
            $('section.four p').css({'opacity':1, 'transform':'translateY(0px)'});
            surf.css({'left': valueT+'%', 'top':'40%', 'transform': 'rotate(180deg)'});
            if(ST == $('section.five').offset().top){
                surf.css({'left': valueT/2+'%', 'top':'50%', 'transform': 'rotate(0deg)'});
                $('section.five span').addClass('on');
                $('section.five p').addClass('on');
            };
        };


	});

});