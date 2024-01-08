document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/popularDesign.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_popular').innerHTML = html;
        
           //swiper
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween:17,
    loop: true,
    slidesPerView:'1',
    centeredSlides: false,
    autoplay: {
      delay: 2000, // milliseconds
      disableOnInteraction: false,
    },
     breakpoints:{
         992: {
            slidesPerView:'3',
        },
         400: {
            slidesPerView:'1',
            spaceBetween:20,
        },
         630: {
            slidesPerView:'2',
            spaceBetween:20,
        },
         768: {
            slidesPerView:'2',
            spaceBetween:20,
         },
         930: {
            slidesPerView:'3',
            spaceBetween:0,
         },
         1030: {
             slidesPerView: '2',
             spaceBetween:5,
             
         },
         1230: {
             slidesPerView: '4',
             spaceBetween:5,
             
         }
    }
});
    const sr_po = ScrollReveal({
       delay: 100,
       duration: 2000,
       origin: 'bottom', distance: '30px',
       easing: 'cubic-bezier(0.5, 0, 0, 1)'
})
               //animations
            sr_po.reveal('.site_popular_head,.site_popular_list');

            })
        });
    

    


