$(function () {
    var $box = $('section'),
        $nav = $('.indicator>a'),
        current = 0,
        old = 0,
        last = $box.length - 1;

    $box.eq(current).animate({
        top: "0"
    }, 5); //시작하면 0번째 섹션 보이게


    $(window).on({
        mousewheel: function (e) {
            var delta = e.originalEvent.wheelDelta;
            if ($box.is(':animated') == false) {
                if (delta < 0) { //스크롤 다운
                    if (current == last) {
                        return;
                    } else {
                        current++;
                        old = current - 1;
                        down();
                    };
                } else { //스크롤 업
                    if (current == 0) {
                        return;
                    } else {
                        current--;
                        old = current + 1;
                        up();
                    }
                };
            };
        },
        click: function () {
            $nav.on('click', function () {
                var This = $(this).index(),
                    prev = current; //이전 current의 값
                if ($box.is(':animated') == false) {
                    if (This > current) {
                        current = This;
                        old = prev;
                        down();
                        console.log(`이전값은 ${prev} this는 ${This}`);
                    } else if (This < current) {
                        current = This;
                        old = prev;
                        up();
                        console.log(`이전값은 ${prev} this는 ${This}`);
                    } else if (This == current) {
                        return;
                    };
                };

            });
            return false;
        }
    });


    function down() {
        $box.eq(current).css({
            top: "100%"
        }).stop().animate({
            top: "0%"
        }, 500);
        $box.eq(old).stop().animate({
            top: "-100%"
        }, 500);
        $nav.eq(current).addClass('active').siblings('a').removeClass('active');

        console.log(`current : ${current}, old: ${old}`);
    };


    function up() {
        $box.eq(current).css({
            top: "-100%"
        }).stop().animate({
            top: "0%"
        }, 500);
        $box.eq(old).stop().animate({
            top: "100%"
        }, 500);
        $nav.eq(current).addClass('active').siblings('a').removeClass('active');

        console.log(`current : ${current}, old: ${old}`);
    };


});
