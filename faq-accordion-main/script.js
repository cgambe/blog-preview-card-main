window.addEventListener('load', function(){
    let triggers = document.querySelectorAll('.accordion-item-header');

    [...triggers].forEach( function( element ){
        element.addEventListener( 'click', accordionToggler );
        element.addEventListener( 'focus', accordionToggler )
    });
});

/**
 * This hides and shows the answers using buttons
 */
function accordionToggler(){
    let accordionItems = document.querySelectorAll('ul li');

    let accordionItem = this.parentNode;
    let state = accordionItem.classList.contains('active');

    [...accordionItems].forEach( function( accordionItem ){
        accordionItem.classList.remove('active');
        accordionItem.querySelector('img').setAttribute('src',"assets/images/icon-plus.svg")
    });

    if( state ){
        accordionItem.classList.remove('active');
        accordionItem.querySelector('img').setAttribute('src',"assets/images/icon-plus.svg")
    } else{
     accordionItem.classList.add('active');
     accordionItem.querySelector('img').setAttribute('src',"assets/images/icon-minus.svg");
    }
}