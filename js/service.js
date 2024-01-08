document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/service.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_service').innerHTML = html;



            const sr_se = ScrollReveal({
                origin: 'bottom',
                distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });

            
              //animations
            sr_se.reveal('.site_contact_img_one', {
                delay: 500,
                duration: 3000,
            });
           sr_se.reveal('.site_contact_content_header', {
                delay: 200,
                duration: 2200,
            });
           sr_se.reveal('.site_contact_content_p_one', {
                delay: 300,
                duration: 2300,
            });
            sr_se.reveal('.site_contact_content_p_two', {
                delay: 400,
                duration: 2400,
            });
            sr_se.reveal('.site_contact_button_button', {
                delay: 500,
                duration: 2500,
            });
           sr_se.reveal('.site_contact_img_two', {
                delay: 700,
                duration: 2800,
               
            });
           sr_se.reveal('.site_contact_button_container', {
                delay: 600,
                duration: 2400,
            });


        });
    

    
});


