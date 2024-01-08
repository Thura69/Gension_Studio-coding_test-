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



    const sr = ScrollReveal({
    origin: 'bottom', distance: '30px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 1100,
   })
            //animations
            sr.reveal('.site_home_header', {
                duration: 2000,
            });
           sr.reveal('.site_home_p', {
                duration: 2200,
            });
            sr.reveal('.site_home_p_2', {
                duration: 2300,
            });
            sr.reveal('.site_home_search_cat', {
                duration: 2700,
            });
            sr.reveal('.site_home_search_input', {
                duration: 2800,
            });
            sr.reveal('.site_home_search', {
                delay: 1200,
                duration: 3000,
            });

            })
        });
    

    


