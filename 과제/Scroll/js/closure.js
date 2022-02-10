;const scroll = (function(ui, $j, $window){

    ui.init = function(){
        ui.wheel.init();
    };

    ui.wheel = {
        $box : $j('section'),
        $nav : $j('.indicator>a'),
        isAni : true,
        last: null,
        current: 0,
        old: 0,
        init: function(){
            this._set();
            this._checkAni();
            this._wheel();
            this._click();
        },
        _set : function(){
            this.last = this.$box.length-1;
            this.$box.eq(this.current).animate({
                top: "0"
            }, 5);
        },
        _checkAni : function(){
            if(this.isAni == false){
                setTimeout(function () {
                    ui.wheel.isAni = true;
                }, 500);
                console.log('check');
            };
        },
        _wheel : function(){
            $window.on('mousewheel',function(e){
                let delta = e.originalEvent.wheelDelta;
                console.log(`실행시작${ui.wheel.isAni}`); //true
                if (ui.wheel.isAni) {
                    if (delta < 0) { 
                        if (ui.wheel.current == ui.wheel.last) {
                            return;
                        } else {
                            ui.wheel.current++;
                            ui.wheel.old = ui.wheel.current - 1;
                            ui.wheel._down();
                            ui.wheel.isAni = false;
                        };
                    } else { 
                        if (ui.wheel.current == 0) {
                            return;
                        } else {
                            ui.wheel.current--;
                            ui.wheel.old = ui.wheel.current + 1;
                            ui.wheel._up();
                            ui.wheel.isAni = false;
                        }
                    };
                    console.log(`실행끝${ui.wheel.isAni}`); //false
                    ui.wheel._checkAni();

                    
                };
            });
        },
        _click : function(){
            this.$nav.on('click',function(){
                let This = $j(this).index(),
                    prev = ui.wheel.current; 
                console.log(`실행시작${ui.wheel.isAni}`);
                if (ui.wheel.isAni) {
                    if (This > ui.wheel.current) {
                        ui.wheel.current = This;
                        ui.wheel.old = prev;
                        ui.wheel._down();
                    } else if (This < ui.wheel.current) {
                        ui.wheel.current = This;
                        ui.wheel.old = prev;
                        ui.wheel._up();
                    } else if (This == ui.wheel.current) {
                        return;
                    };
                    ui.wheel.isAni = false;
                    ui.wheel._checkAni();
                    console.log(`실행끝${ui.wheel.isAni}`);
                };
                return false;
            });
        },
        _down : function(){
            this.$box.eq(this.current).css({
                top: "100%"
            }).stop().animate({
                top: "0%"
            }, 500);
            this.$box.eq(this.old).stop().animate({
                top: "-100%"
            }, 500);
            this.$nav.eq(this.current).addClass('active').siblings('a').removeClass('active');

            console.log(`current : ${this.current}, old: ${this.old}`);
        },
        _up : function(){
            this.$box.eq(this.current).css({
                top: "-100%"
            }).stop().animate({
                top: "0%"
            }, 500);
            this.$box.eq(this.old).stop().animate({
                top: "100%"
            }, 500);
            this.$nav.eq(this.current).addClass('active').siblings('a').removeClass('active');

            console.log(`current : ${this.current}, old: ${this.old}`);
        },
        
    };
    ui.init();
    return ui;

}(window.scroll || {}, jQuery, $(window)));
