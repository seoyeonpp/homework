$(function(){
    var $indi = $('.indicator>a'),
        $box = $('section'),
        zero = 0;
        
    //휠이벤트
    var wheelEv = (function(){
        var boxWheel = $box.on('mousewheel',function(e){
            var delta = e.originalEvent.wheelDelta/120;

            if(delta<0){
                if(zero >= 3){
                    $box.eq(zero).stop().animate({top:"0%"},500);
                    $indi.eq(zero).addClass('active');
                }else{
                    $box.eq(zero).stop().animate({top:"-100%"},500);
                    $box.eq(zero+1).stop().animate({top:"0%"},500);
                    $indi.eq(zero).removeClass('active');
                    $indi.eq(zero+1).addClass('active');
                    zero++;
                    console.log('section'+zero+' up');
                }
            }else{
                if(zero <= 0){
                    $box.eq(zero).stop().animate({top:"0%"},500);
                    $indi.eq(zero).addClass('active');
                }else{
                    $box.eq(zero).stop().animate({top:"100%"},500);
                    $box.eq(zero-1).stop().animate({top:"0%"},500);
                    $indi.eq(zero).removeClass('active');
                    $indi.eq(zero-1).addClass('active');
                    zero--;
                    console.log('section'+zero+' down');
                }
            }
    
        });
        return boxWheel;
    })();


    //인디케이터 클릭
    var indiClick = (function(){
        var clickIt = $indi.on('click',function(){
            var thisEq = $(this).index();

            zero = thisEq; //zero에 클릭한 인덱스 값 할당
            
            $indi.removeClass('active');
            $(this).addClass('active');


            console.log('zero: '+ zero + ' thisEq: '+thisEq);

            if(zero == 0){
                console.log('0이다');
                $box.eq(zero).stop().animate({top:"0%"},500); //0
                $box.eq(zero+1).stop().animate({top:"100%"},500);//1
                $box.eq(zero+2).stop().animate({top:"100%"},500); //2
                $box.eq(zero+3).stop().animate({top:"100%"},500); //3

            }else if(zero == 1){
                console.log('1이다');
                $box.eq(1).css({"z-index":"1"});
                $box.eq(zero-1).stop().animate({top:"-100%"},500); //0
                $box.eq(zero).stop().animate({top:"0%"},500); //1
                $box.eq(zero+1).stop().animate({top:"100%"},500); //2
                $box.eq(3).stop().animate({top:"100%"},500); //3

            }else if(zero ==2){
                console.log('2이다');
                $box.eq(1).css({"z-index":"0"});
                $box.eq(2).css({"z-index":"1"});
                $box.eq(zero-2).stop().animate({top:"-100%"},500); //0
                $box.eq(zero-1).stop().animate({top:"-100%"},500); //1
                $box.eq(zero).stop().animate({top:"0%"},500); //2
                $box.eq(3).stop().animate({top:"100%"},500); //3
            }else{
                console.log('3이다');
                $box.eq(1).css({"z-index":"0"});
                $box.eq(2).css({"z-index":"-1"});
                $box.eq(zero-3).stop().animate({top:"-100%"},500); //0
                $box.eq(zero-2).stop().animate({top:"-100%"},500); //1
                $box.eq(zero-1).stop().animate({top:"-100%"},500); //2
                $box.eq(zero).stop().animate({top:"0%"},500); //3
            }
    

            return false;
        });
        return clickIt;
    })();

    wheelEv;
    indiClick;


});
