const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', () => {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focus');
  searchInputEl.placeholder = '통합검색';
})

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focus');
  searchInputEl.placeholder = '';
})

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle((e) => {
  console.log(window.scrollY);
  // if(window.scrollY>500 && !badgeEl.classList.contains('badge--hide')){
  //   badgeEl.classList.add('badge--hide');
  // }
  // else if(window.scrollY<500 && badgeEl.classList.contains('badge--hide')){
  //   badgeEl.classList.remove('badge--hide')
  // }

  if (window.scrollY > 500) {
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: "none"
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: "block"
    })
  }

}, 300))

const fadeInEls = document.querySelectorAll('.visual .fade-in');
// let idx = 0;
// const itvid = setInterval(()=>{
//   if(fadeInEls.length>idx){
//     gsap.to(fadeInEls[idx++], .6, {
//       opacity: 1
//     })
//   }
//   else{
//     clearInterval(itvid);
//   }
// },700);

fadeInEls.forEach((fadeel,idx)=>{
  gsap.to(fadeel, 1, {
    delay : (idx+1)*.7,
    opacity: 1,
  })
})

var swiper = new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop : true
});


var swiper = new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  //autoplay: true,
  loop : true,
  // autoplay: {
  //   delay : 5000
  // },
  pagination:{
    el:'.promotion .swiper-pagination',
    clickable: true
  },
  navigation : {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }

});
