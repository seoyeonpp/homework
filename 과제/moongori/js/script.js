$(function(){

    // gnb메뉴
    const gnbMainLi = $('.gnb_main>ul>li'),
        categoryLi = $('.gnb_main>ul>.category'),
        spaceLi = $('.gnb_main>ul>.space'),
        category = $('.gnb_sub.category'),
        space = $('.gnb_sub.space');
        
    gnbMainLi.hover(
        function(){
            category.removeClass('show');
            space.removeClass('show');
            gnbMainLi.removeClass('on');

            $(this).addClass('on');
            if(categoryLi.hasClass('on')){
                showCategory();
            }else if(spaceLi.hasClass('on')){
                showSpace();
            }
        },
        function(){
            $(this).removeClass('on');
        }
    );

    function showCategory(){
        category.siblings('.gnb_sub').removeClass('show');
        category.addClass('show');
        category.mouseleave(function(){
            $(this).removeClass('show');
        });
    };

    function showSpace(){
        space.siblings('.gnb_sub').removeClass('show');
        space.addClass('show');
        space.mouseleave(function(){
            $(this).removeClass('show');
        });
    };


    // gnb 카테고리 호버 시 너비 효과
    const categoryWidth = $('.category>.inner_sub').outerWidth(),
        categoryTotalWidth = categoryWidth*2,
        currentLi = $('.category>.inner_sub>ul>li');

    console.log(categoryWidth);
    console.log(categoryTotalWidth);

    currentLi.hover(
        function(){
            currentLi.removeClass('current');
            $(this).addClass('current');
            widthChange(categoryTotalWidth);
        },
        function(){
            $(this).removeClass('current');
            widthChange(categoryWidth);
        }
    );

    function widthChange(value){
        $('.category>.inner_sub').css('width',value);
    };

    // 메인배너 컨트롤버튼
    $('.pause').on('click',function(){
        $('.main_banner_slide').slick('slickPause');
        $(this).css('display','none');
        $('.play').css('display','block');
    });

    $('.play').on('click',function(){
        $('.main_banner_slide').slick('slickPlay');
        $(this).css('display','none');
        $('.pause').css('display','block');
    });

    $('.page').on('click',function(){
        $('.main_banner_slide').slick('slickNext');
    });


    // 스크랩 버튼
    const scrap = $('button.scrap');
    scrap.on('click',function(){
        $(this).toggleClass('complete');
    });
    


    // 탭 인디케이터 텍스트 변경
    //--윈도우 새로고침 후 이벤트 실행--
    $(window).bind('load',function(){
        tabText();
    });

    //--윈도우 리사이즈--
    $(window).resize(function(){
        if(this.resizeTO){
            clearTimeout(this.resizeTO);
        }
        this.resizeTO = setTimeout(function(){
            $(this).trigger('resizeEnd');
        },250);
    });
    $(window).on('resizeEnd',function(){
        tabText();
    });
    function tabText (){
        tabText1 = ['손잡이','철물 ・ 하드웨어','공구 ・ 전동공구'];
        tabText2 = ['가구','아웃도어','리빙・ 라이프스타일'];
        for(let i = 0; i<3; i++){
            $('.tab_menu.one .slick-dots > li').eq(i).find('button').text(tabText1[i])
            $('.tab_menu.two .slick-dots > li').eq(i).find('button').text(tabText2[i])
        };
    };



    //모바일
    // --모바일 fix 이미지 변경--
    $(window).resize(function(){
        const winW = window.innerWidth;
        if(winW <= 768){
            $('.coupon>a>img').attr('src','../img/img-mo-fix.png');
        }else{
            $('.coupon>a>img').attr('src','../img/img-pc-main-fix.png');
        };
    });

    const mobileW = window.innerWidth;
    if(mobileW <= 768){
        $('.coupon>a>img').attr('src','../img/img-mo-fix.png');
    };

    // --모바일 text 삽입--
    const $p = $('<p>㈜ 문고리닷컴 사업자 정보</p>');
    if(mobileW <= 768){
        $('.footer_info').append($p);
        $('p.copyright').text('© Moongori.com Corp.');
    };


    // 슬릭슬라이드
    //--슬릭 실행--
    mainSlide();
    tdSlide();
    tabSlide();
    innerSlide();
    brandSlide();

    //--윈도우 크기조절 시, 슬릭 오류 해결--
    $(window).resize(function(){
        if(this.resizeW){
            clearTimeout(this.resizeW);
        }
        this.resizeW = setTimeout(function(){
            $('.main_banner_slide').slick('unslick');
            $('.time_deal_slide').slick('unslick');
            $('.tab_menu').slick('unslick');
            $('.inner_slider').slick('unslick');
            $('.brand_slide_wrap').slick('unslick');
    
            $(this).trigger('chkSlick');
        },100);
    });
    $(window).on('chkSlick',function(){
        mainSlide();
        tdSlide();
        tabSlide();
        innerSlide();
        brandSlide();
    });


    // --메인배너 슬라이드--
    function mainSlide(){
        $('.main_banner_slide').slick({
            slidesToShow:2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            customPaging: function (slider, i) {
                return (i + 1);
            },
            responsive:[
                {
                    breakpoint: 361,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplaySpeed: 3000,
                        arrows: false,
                        centerMode: false,
                        variableWidth: true,
                    }
                },  {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplaySpeed: 3000,
                        arrows: false,
                    }
                },  {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplaySpeed: 3000,
                        arrows: false,
                    }
                },
            ],
        });

    };

    // --타임딜 슬라이드--
    function tdSlide(){
        $('.time_deal_slide').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            responsive:[
                {
                    breakpoint: 361,
                    settings: "unslick"
                }, {
                    breakpoint: 769,
                    settings: "unslick"
                }, {
                    breakpoint: 1025,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: false,
                    }
                }
    
            ],
        });
    }; 


    // --오늘의 인기상품 탭슬라이드--
    function tabSlide (){
        $('.tab_menu').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            prevArrow: false,
            nextArrow: false,
            variableWidth: true,
            draggable:false,
            swipe : false,
        });
    }; 

    function innerSlide(){
        $('.inner_slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            responsive:[
                {
                    breakpoint: 361,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: false,
                        variableWidth: true,
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        autoplay: false,
                        centerMode: false,
                        variableWidth: true,
                    }
                }, {
                    breakpoint: 1025,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: false,
                    }
                }
            ],
        });
    }; 
    

    // --추천브랜드 슬라이드--
    function brandSlide (){
        $('.brand_slide_wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            responsive:[
                {
                    breakpoint: 361,
                    settings: "unslick"
                }, {
                    breakpoint: 769,
                    settings: "unslick"
                },  {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                }
            ],
        });
    }; 
    

});
