
const parent = document.getElementById('share_button');
parent.addEventListener('touchstart', function(e){
    if(e.target === parent){
        const showContainer = document.getElementById("showContainer");
        const showTriangle = document.getElementById('showTriangle');
        showContainer.classList.toggle('show');
        showTriangle.classList.toggle('show'); 
    }});

    

 



