document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/contact.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_contact').innerHTML = html;


            
              //animations
            ScrollReveal().reveal('.site_contact_img_one', {
                delay: 500,
                duration: 3000,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_contact_content_header', {
                delay: 200,
                duration: 2200,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_contact_content_p_one', {
                delay: 300,
                duration: 2300,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_contact_content_p_two', {
                delay: 400,
                duration: 2400,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_contact_button_button', {
                delay: 500,
                duration: 2500,
                origin: 'bottom', distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_contact_img_two', {
                delay: 600,
                duration: 2800,
                origin: 'bottom', distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_contact_button_container', {
                delay: 400,
                duration: 2400,
                origin: 'bottom', distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });


        });
    

    
});


