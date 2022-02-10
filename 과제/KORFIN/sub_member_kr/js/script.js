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
    const partnerBtn = $('.footer_partner>button');
    const partnerSite = $('.footer_partner ul');

    partnerBtn.on('click',function(){
        partnerSite.slideToggle(500);
    })
})
// 하나를 감싼다음 ul을 감싼다음 position으로 아래로 땡긴다 position absolute bottom 으로 height 0 에서 원래 높이값으로 