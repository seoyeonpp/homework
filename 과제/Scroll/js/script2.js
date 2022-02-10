$(function(){
    var $indi = $('.indicator>a'),
        $box = $('section'),
        current = 0,
        old = current-1;

        //변수 필요한것 : 
        //current 현재 보이는 슬라이드 index
        //
        
    //휠이벤트
    var wheelEv = (function(){
        var boxWheel = $box.on('mousewheel',function(e){
            var delta = e.originalEvent.wheelDelta; // -120, 120

            if(delta<0){
                if(current < 3){
                    e.preventDefault();
                    current = 3;
                    old = 2;
                }else{
                    
                    if($box.is(':animated') == false){
                        console.log('current'+current+' old'+old);

                        $box.eq(old).stop().animate({top:"-100%"},500);
                        $box.eq(current).stop().animate({top:"0%"},500);
                        $indi.eq(old).removeClass('active');
                        $indi.eq(current).addClass('active');
                        current++;
                        old++;
                    }
                }
            }else{
                if(current > 0){
                    e.preventDefault();
                    current = 0;
                    old=0;
                }else{
                    if($box.is(':animated') == false){
                        console.log('current'+current+' old'+old);

                        $box.eq(current).stop().animate({top:"0%"},500); 
                        $box.eq(current+1).stop().animate({top:"100%"},500); 
                        $indi.eq(current).addClass('active');
                        $indi.eq(current+1).removeClass('active');
                        old--;
                        current--;
                    }
                }
            }
        });
        return boxWheel;
    })();


    //인디케이터 클릭
    // var indiClick = (function(){
    //     var clickIt = $indi.on('click',function(){
    //         var thisEq = $(this).index();
            
    //         $indi.removeClass('active');
    //         $(this).addClass('active');
            

    //         console.log($box.eq(current));

    //         $box.eq(thisEq).stop().animate({top:"0%"},500);

            

    //         return false;
    //     });
    //     return clickIt;
    // })();


    wheelEv;
    indiClick;

});
