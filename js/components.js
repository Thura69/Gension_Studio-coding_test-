document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;

            const toggleTag = document.getElementById('toggle');
            const siteoverLayTag = document.querySelector('.site_over-lay');
            const siteOverLayListTag = document.querySelectorAll('.site_over-lay_list');
            const siteOverLayParent = document.querySelector('.site_over-lay_parent');

            toggleTag.addEventListener('click', () => {
                siteoverLayTag.classList.toggle('site_over-lay_active');
                
            //menu opacity
            siteOverLayParent.classList.toggle('site_over-lay_parent_active')
            
            //menu list animation
            siteOverLayListTag.forEach((e) => {
                e.classList.toggle('site_over-lay_list_active');
            })
            })
        });
    

    
});


