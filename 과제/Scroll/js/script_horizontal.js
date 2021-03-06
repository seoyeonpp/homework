$(function(){
    var $box = $('section'),
        $nav = $('.indicator>a'),
        current = 0,
        $last = $box.length-1;
    
        $box.eq(current).animate({left:"0"},5); //시작하면 0번째 섹션 보이게

    //휠이벤트
    $(window).on('mousewheel',function(e){
        var delta = e.originalEvent.wheelDelta; // -120, 120
        if(delta<0){
            if($box.is(':animated') == false){
                if(current == $last){
                    return; //current가 3이면 종료
                }else{
                    current ++; //1
                    old = current-1; //0
                    $box.eq(current).css({left:"100%"}).stop().animate({left:"0%"},500);
                    $box.eq(old).stop().animate({left:"-100%"},500);
                    $nav.eq(current).addClass('active');
                    $nav.eq(old).removeClass('active');
    
                    console.log(`current : ${current}, old: ${old}`);
                };
            };
            
        }else{
            if($box.is(':animated') == false){

                if(current == 0){
                    return; //current가 0이면 함수종료
                }else{
                    current --;
                    old = current+1;
                    $box.eq(current).css({left:"-100%"}).stop().animate({left:"0%"},500);
                    $box.eq(old).stop().animate({left:"100%"},500);
                    $nav.eq(current).addClass('active');
                    $nav.eq(old).removeClass('active');
                    console.log(`current : ${current}, old: ${old}`);
                };

            };
        };
    });


    //인디케이터 클릭
    $nav.on('click',function(){
        var it = $(this).index();
        console.log(`click : ${it} current : ${current}`);

        $nav.removeClass('active');
        $nav.eq(it).addClass('active');

        if($box.is(':animated') == false){
            if(it > current){
                $box.eq(current).stop().animate({left:"-100%"},500);
                $box.eq(it).css({left:"100%"}).stop().animate({left:"0%"},500);
                current = it;
            }else if(it < current){
                $box.eq(current).stop().animate({left:"100%"},500);
                $box.eq(it).css({left:"-100%"}).stop().animate({left:"0%"},500);
                current = it;
            }else if(it == current){
                console.log('stop');
                $box.eq(current).stop();
                $box.eq(it).stop();
            };
        };

        return false;
    });

});