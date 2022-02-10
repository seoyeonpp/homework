$(function(){

    // gnb메뉴
    const gnbMain = $('.gnb_main>ul>li');
    const category = $('.gnb_main>ul>.category');
    const space = $('.gnb_main>ul>.space');

    gnbMain.hover(function(){
        gnbMain.removeClass('on');
        $(this).addClass('on');
        showSub();
        hideSub();
    },function(){
        $(this).removeClass('on');
        
    })

    function showSub(){
        if(category.hasClass('on')){
            $('.gnb_sub.category').siblings('.gnb_sub').removeClass('show');
            $('.gnb_sub.category').addClass('show');
        }
    
        if(space.hasClass('on')){
            $('.gnb_sub.space').siblings('.gnb_sub').removeClass('show');
            $('.gnb_sub.space').addClass('show');
        }
    }
    function hideSub(){
        if(!category.hasClass('on')){
            $('.gnb_sub.category').removeClass('show');
            $('.gnb_sub.category').mouseleave(function(){
                $('.gnb_sub.category').siblings('.gnb_sub').removeClass('show');
                $(this).removeClass('show');
            })
        }
        if(!space.hasClass('on')){
            $('.gnb_sub.space').removeClass('show');
            $('.gnb_sub.space').mouseleave(function(){
                $(this).removeClass('show');
            })
        }
    }

    const currentLi = $('.category>.inner_sub>ul>li')
    currentLi.mouseenter(function(){
        currentLi.removeClass('current');
        $(this).addClass('current');
        width();
    })
    currentLi.mouseleave(function(){
        $(this).removeClass('current');
        $('.category>.inner_sub').css('width','224px');
    })

    function width(){
        if(currentLi.hasClass('current')){
            console.log('d');
            $('.category>.inner_sub').css('width','448px');
        }
    }
    



    // 메인배너 슬라이드
    $('.main_banner_slide').slick({
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        customPaging: function (slider, i) {
            return (i + 1);
        },
    });

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
    })



    
    // 타임딜 슬라이드
    $('.time_deal_slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
    });


    // 오늘의 인기상품 탭슬라이드
    $('.tab_menu').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
    });

    $('.inner_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
    });

    // 추천브랜드 슬라이드
    $('.brand_slide_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
    });
    

    // 탭 인디케이터 텍스트 변경
    $('.tab_menu.one > .slick-dots > li:nth-child(1)>button').text('손잡이');
    $('.tab_menu.one > .slick-dots > li:nth-child(2)>button').text('철물 ・ 하드웨어');
    $('.tab_menu.one > .slick-dots > li:nth-child(3)>button').text('공구 ・ 전동공구');

    $('.tab_menu.two > .slick-dots > li:nth-child(1)>button').text('가구');
    $('.tab_menu.two > .slick-dots > li:nth-child(2)>button').text('아웃도어');
    $('.tab_menu.two > .slick-dots > li:nth-child(3)>button').text('리빙・ 라이프스타일');


    // 스크랩 버튼
    const scrap = $('button.scrap');
    scrap.on('click',function(){
        $(this).toggleClass('complete');
    });

});
