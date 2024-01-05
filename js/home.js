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

            })
        });
    

    


