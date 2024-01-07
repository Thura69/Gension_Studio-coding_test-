document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/latest.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_latest').innerHTML = html;


              //animations
            ScrollReveal().reveal('.site_latest_card', {
                delay: 500,
                duration: 2400,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });



        });
    

    
});


