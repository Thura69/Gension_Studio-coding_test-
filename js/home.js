document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/home.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_home').innerHTML = html;
        
            const siteDesignsDropTag = document.querySelector('.site_designs_drop');

            const dropDownIcon = document.querySelector('.drop_down_icon');

            //drop down 
            dropDownIcon.addEventListener('click', () => {
                siteDesignsDropTag.classList.toggle('site_designs_drop_active');

                //rotate
                dropDownIcon.classList.toggle('drop_down_icon_active')
            })

            //animations
            ScrollReveal().reveal('.site_home_header', {
                delay: 1100,
                duration: 2000,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
            });
            ScrollReveal().reveal('.site_home_p', {
                delay: 1100,
                duration: 2200,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_home_p_2', {
                delay: 1100,
                duration: 2300,
                origin: 'bottom', distance: '30px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_home_search_cat', {
                delay: 1100,
                duration: 2700,
                origin: 'bottom', distance: '10px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_home_search_input', {
                delay: 1100,
                duration: 2800,
                origin: 'bottom', distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_home_search_button', {
                delay: 1100,
                duration: 2800,
                origin: 'bottom', distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });
            ScrollReveal().reveal('.site_home_search', {
                delay: 1200,
                duration: 3000,
                origin: 'bottom', distance: '20px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)'
            });

            })
        });
    

    


