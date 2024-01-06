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
             slidesPerView: '3',
             spaceBetween:5,
             
         }
    }
});
            
               //animations
            ScrollReveal().reveal('.site_popular_head', {
                delay: 100,
                duration: 2000,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_popular_list', {
                delay: 200,
                duration: 2200,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });

            })
        });
    

    


