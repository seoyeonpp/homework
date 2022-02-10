;const ctrlUI = (function (ui, $j, $window, $body) {

    ui.init = function () {
        ui.gnb.init();
    };


    ui.gnb = {
        $wrap: $j('#wrap'),
        $header: $j(".headerWrap"),
        $nav: $j('nav'),
        $items:  $j('.gnbWrap > li'),
        $subItems: $j('.dep2Gnb'),
        $obj: $j('.gnbWrap > li.on > .dep2Gnb'),
        st: null,
        _isPc: true,
        _isMo: true,
        init: function(){
            this._chkMo() ? this._mo() : this._pc();
            this._resize();
            this._open();
            this._close();
            this._moScroll();
            $j('.main').length < 0 && this._color();
        },
        _pc: function(){
            if(this._isPc){
                this._isPc = false;
                this._isMo = true;


                this.$wrap.addClass('pc').removeClass('mo');
                this.$items.unbind('click');
                ui.gnb.$header.find('nav').show();
                ui.main._evt();

                this.$items.hover(function() {
                    ui.gnb.$header.addClass("on");
                    $j(this).addClass("on").siblings(ui.gnb.$items).removeClass('on');
    
                    ui.gnb.$obj.animate({
                        "opacity":"1"
                    },  200);
                    
                });
    
                this.$header.on('mouseleave', function(){     
                    ui.gnb.$header.removeClass("on");
                    ui.gnb.$items.removeClass('on');
                });
    
            };

        },
        _mo: function(){
            if(this._isMo){
                this._isMo = false,
                this._isPc = true;

                this.$wrap.addClass('mo').removeClass('pc');
                this.$items.unbind('mouseenter mouseleave');
                this.$header.unbind('mouseleave');
                $window.off('mousewheel');
                ui.gnb.$header.find('nav').hide();

                this.$items.on('click', function(){
                    if($j(this).hasClass('on')){
                        $j(this).removeClass('on').find(ui.gnb.$subItems).slideUp(500);
                    } else {
                        $j(this).addClass('on').find(ui.gnb.$subItems).slideDown(500).end().siblings(ui.gnb.$items).removeClass('on').find(ui.gnb.$subItems).slideUp(500);
                    };
                });
            };

        },
        _moScroll: function(){

            let $top00 = $j('main > section').eq(0).offset().top,
                $top01 = $j('main > section').eq(1).offset().top,
                $top02 = $j('main > section').eq(2).offset().top,
                $top03 = $j('main > section').eq(3).offset().top;

            $window.on('scroll', function(){
                let st = $window.scrollTop();

                if($top01 > st){
                    ui.gnb.$header.removeClass('active');
                };
                if($top01 < st){
                    ui.gnb.$header.addClass('active');
                };
                if($top02 < st){
                    ui.gnb.$header.removeClass('active');
                };
                if($top03 < st){
                    ui.gnb.$header.addClass('active');
                };
            });
        },
        _open: function(){
            let $openBtn = $body.find('.btnGnb');

                $openBtn.on('click', function(){
                    ui.gnb.$header.find('nav').fadeIn();
                    $body.css({'height': $window.innerHeight(), 'overflow':'hidden'});
                    ui.gnb.st = $window.scrollTop();
                });
        },
        _close: function(){
            let $closeBtn = $body.find('.btnGnbClose');
            $closeBtn.on('click', function(){
                ui.gnb.$header.find('nav').fadeOut();
                ui.gnb.$items.removeClass('on').find('ul').hide();
                $body.css({'height': 'auto', 'overflow':'visible'});
                $window.scrollTop(ui.gnb.st);
            });
        },
        _color: function(){
            let $obj = $j('.content'),
                $div = $j('.logo').closest('div'),
                $logo = $j('.logo'),
                $btn = $j('.btnGnb'),
                t = $obj.offset().top;

            $window.on('scroll', function(){
                if($window.scrollTop() > t){
                    $logo.addClass('on');
                    $btn.addClass('on');
                    ui.gnb.$header.addClass('on');
                } else {
                    $logo.removeClass('on');
                    $btn.removeClass('on');
                    $div.removeClass('on');
                    ui.gnb.$header.removeClass('on');
                };
            });
        },
        _resize: function(){
            $window.on('resize', function(){
                ui.gnb._chkMo() ? ui.gnb._mo() : ui.gnb._pc();
            });
        },
        _chkMo: function(){
            return $window.innerWidth() < 769 ? true : false;
        }

    }

    ui.init();
    return ui;
    
}(window.ctrlUI || {}, jQuery, $(window), $('body')));