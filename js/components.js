document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;


            const toggleTag = document.getElementById('toggle');
            const toggleCheck = document.getElementById('toggle_check');
            const siteoverLayTag = document.querySelector('.site_over-lay');
            const siteOverLayListTag = document.querySelectorAll('.site_over-lay_list a');
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

            siteOverLayListTag.forEach(function (e) {
                e.addEventListener('click', () => {
                    siteoverLayTag.classList.toggle('site_over-lay_active');
            //menu opacity
            siteOverLayParent.classList.toggle('site_over-lay_parent_active')
                })
            })
        });
    
    
   var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var targetId = entry.target.id;
                updateActiveLink(targetId);
            }
        });
    }, { threshold: 0.5 });

    // Observe each section
    document.querySelectorAll('section').forEach(function(section) {
        observer.observe(section);
    });

    // Add click event listener to navigation links
    document.querySelectorAll('.site_list a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();


            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            updateActiveLink(targetId);

            // Scroll to the corresponding section with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to update active link
    function updateActiveLink(targetId) {
        // Remove the 'active-link' class from all links
        document.querySelectorAll('.site_list_link').forEach(function(link) {
            link.classList.remove('active-link');
        });

        // Add the 'active-link' class to the clicked link
        document.querySelector('.site_list_link[href="#' + targetId + '"]').classList.add('active-link');
    }

    
    


    
});


