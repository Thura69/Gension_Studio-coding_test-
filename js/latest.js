document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/latest.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_latest').innerHTML = html;



        });
    

    
});


