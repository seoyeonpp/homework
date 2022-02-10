$(function(){
    var $indi = $('.indicator>a'),
        $box = $('section'),
        current = 0,
        old = current-1;

        
    //휠이벤트
    var wheelEv = (function(){
        var boxWheel = $box.on('mousewheel',function(e){
            var delta = e.originalEvent.wheelDelta; // -120, 120

            if(delta<0){
                if(current < 3){
                    if($box.is(':animated') == false){
                        if(old == -1){
                            moveUp(current,old);
                        }else{
                            console.log('current'+current+' old'+old);
                            moveDown(current,old);
                            current++;
                            old++;
                        }
                    }
                }else{
                    e.preventDefault();
                }
        
            }else{
                if(current > 0){
                    if($box.is(':animated') == false){
                        
                        current = current-1;
                        old = current+1;
                        moveUp(current,old);
                        console.log('current'+current+' old'+old);
        
                        old--;
                        current--;
                    }
                }else{
                    e.preventDefault();
                }
            } 
            function moveDown (c,o){
                $box.eq(c).stop().animate({top:"0%"},500);
                $box.eq(o).stop().animate({top:"-100%"},500);
                $indi.eq(c).addClass('active');
                $indi.eq(o).removeClass('active');
            }
            function moveUp (c,o){
                $box.eq(c).stop().animate({top:"0%"},500);
                $box.eq(o).stop().animate({top:"100%"},500);
                $indi.eq(c).addClass('active');
                $indi.eq(o).removeClass('active');
            }
        });
        return boxWheel;
    })();


    // var scrollEv = (function(){
    //     var boxWheel = $box.on('mousewheel',function(e){
    //         var delta = e.originalEvent.wheelDelta;
    //         if(delta<0){
    //             if(current > 3){
    //                 current ++;
    //                 moving(current);
    //             };
    //         }else{
    //             if(current < 0){
    //                 current --;
    //                 moving(current);
    //             };
    //         };
            
    //     });

    //     var moving = function(c){
    //         $box.eq(c).stop().animate({top:"0%"},500);
    //     };
        
    //     return boxWheel;
    // })();
    // scrollEv;
    // console.log($box.eq(current));


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



});
