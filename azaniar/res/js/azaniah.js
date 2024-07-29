jQuery(document).ready(function(){
    
    jQuery(".menu-trigger").click(openNav);
    jQuery(".btn-nav-close").click(closeNav);
    jQuery("body#gallery-body .gallery-item img").click( showImage );
});

function openNav(){
    jQuery("menu").fadeIn(500);
    console.log(jQuery("menu"));
}


function closeNav(){
    jQuery("menu").fadeOut(400);
}

function showImage(){
    let imageItem = jQuery(this).parent();
    
    jQuery(imageItem).addClass('active');
   
    jQuery(imageItem).append('<button class="btn text-light remove-image">&times;</button>');

    jQuery('.remove-image').click(function(){
        jQuery(imageItem).removeClass('active');
        jQuery('.remove-image').remove();
    });

}
