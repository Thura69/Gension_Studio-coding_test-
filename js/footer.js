document.addEventListener('DOMContentLoaded', () => {
    // insert header component 
fetch('./components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('site_footer').innerHTML = html;
            


        });
    

    
});


