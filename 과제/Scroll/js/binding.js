$(function(){
    var $box = $('section'),
        $nav = $('.indicator>a'),
        current = 0,
        $last = $box.length-1;
    
        $box.eq(current).animate({top:"0"},5); //시작하면 0번째 섹션 보이게


    $(window).on({
        mousewheel: function(e){
            var delta = e.originalEvent.wheelDelta;
            if(delta<0){
                if($box.is(':animated') == false){
                    if(current == $last){
                        return; 
                    }else{
                        current ++; 
                        var old = current-1; 
                        $box.eq(current).css({top:"100%"}).stop().animate({top:"0%"},500);
                        $box.eq(old).stop().animate({top:"-100%"},500);
                        $nav.eq(current).addClass('active');
                        $nav.eq(old).removeClass('active');
        
                        console.log(`current : ${current}, old: ${old}`);
                    };
                };
    
            }else{
                if($box.is(':animated') == false){
                    if(current == 0){
                        return; 
                    }else{
                        current --;
                        var old = current+1;
                        $box.eq(current).css({top:"-100%"}).stop().animate({top:"0%"},500);
                        $box.eq(old).stop().animate({top:"100%"},500);
                        $nav.eq(current).addClass('active');
                        $nav.eq(old).removeClass('active');
                        console.log(`current : ${current}, old: ${old}`);
                    };
                };
    
            };
        },
        click: function(){
            $nav.on('click',function(){
                var it = $(this).index();
                console.log(`click : ${it} current : ${current}`);
        
                $nav.removeClass('active');
                $nav.eq(it).addClass('active');
                
                if($box.is(':animated') == false){
                    if(it > current){ 
                        $box.eq(current).stop().animate({top:"-100%"},500);
                        $box.eq(it).css({top:"100%"}).stop().animate({top:"0%"},500);
                        current = it;
                    }else if(it < current){
                        $box.eq(current).stop().animate({top:"100%"},500);
                        $box.eq(it).css({top:"-100%"}).stop().animate({top:"0%"},500);
                        current = it;
                    }else if(it == current){
                        console.log('stop');
                        $box.eq(current).stop();
                        $box.eq(it).stop();
                    };
                };
                return false;
            });
        }
    });

});