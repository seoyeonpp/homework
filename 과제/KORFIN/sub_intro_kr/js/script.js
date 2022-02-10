let topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({top:0, behavior: 'smooth'});
})

const partnerBtn = document.querySelector('.footer_partner>button');
const partnerOption = document.querySelector('.footer_partner>ul');

// partnerBtn.addEventListener('click',function(){
//     partnerOption.classList.toggle('active');
// });

$(function(){
    const partnerBtn = $('.footer_partner>button'),
          partnerSite = $('.footer_partner ul');
         

    partnerBtn.on('click',function(){
        partnerSite.slideToggle(500);
    });

    resizeWin();
    
    $(window).resize(function(){
        const webSize = window.innerWidth;
        console.log(webSize);
        resizeWin();
    });

    function resizeWin(){
        if(window.innerWidth <= 768){
            $('.vision_contents.one>img').attr('src','img/img-mo-about-vision-01.png');
            $('.vision_contents.two>img').attr('src','img/img-mo-about-vision-02.png');
        }else{
            $('.vision_contents.one>img').attr('src','img/img-vision-01.png');
            $('.vision_contents.two>img').attr('src','img/img-vision-02.png');
        };
    };
});


