window.addEventListener('click', function(){
    let openButton = document.querySelector("#nav-btn");
    let closeButton = document.querySelector("#close-btn");
    let navContent = document.querySelector("#nav-content");

    openButton.onclick = function(){
        if( this.innerHTML == '<img width="20px" height="18px" src="images/icon-close.svg" alt="close">' ){
            navContent.style.display = "none";

            this.innerHTML = '<img width="20px" height="18px" src="images/icon-hamburger.svg" alt="hamburger">';
        } else{
             navContent.style.display = "block";
            this.innerHTML = '<img width="20px" height="18px" src="images/icon-close.svg" alt="close">'
        }
    }
});