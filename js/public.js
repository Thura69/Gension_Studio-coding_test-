document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/public.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_public').innerHTML = html;
            
let newSwiper = new Swiper(".media_track_container", {
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

        });
    

    
});


