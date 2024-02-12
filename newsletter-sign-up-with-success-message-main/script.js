window.addEventListener( 'load', function(){
    let submitBtn = document.querySelector('form button');
    let closeModalBtn = document.querySelector('.modal-content button');
    let formInput = document.querySelector('form input');
   

    submitBtn.addEventListener( 'click', submitForm );
    closeModalBtn.addEventListener( 'click', closeModal );
    formInput.addEventListener( 'keyup', validateForm );
});

/**
 * For submitting form
 */
function submitForm(){
    let form = document.querySelector('form');
    let formInput = document.querySelector('form input');
    let modal = document.querySelector('.modal');

    if( formInput.checkValidity() ){
        modal.classList.add('active');
    } 
    validateForm();
}

/**
 * Closing modal
 */
function closeModal(){
     let modal = document.querySelector('.modal');
     modal.classList.remove('active');
}

/**
 * Validating the email 
 */
function validateForm(){
     let formValidation = document.querySelector('.validation');
     let formInput = document.querySelector('form input');

     if( !formInput.checkValidity() ){
        formValidation.classList.add('active');
     } else{
        formValidation.classList.remove('active');
     }
}