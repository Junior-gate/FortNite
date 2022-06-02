
const swiper = new Swiper('.popular-offers__slider', {
   // loop: true,
   pagination: {
      el: '.popular-offers__pagination',
   },
   breakpoints: {
      319: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      470: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      554: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      930: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1220: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
      1561: {
         slidesPerView: 5,
         slidesPerGroup: 5,
         spaceBetween: 55,
         slideToClickedSlide: true,
      }

   }

});
