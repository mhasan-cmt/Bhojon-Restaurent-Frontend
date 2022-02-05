$(document).ready(function(){
    $('.preloader').delay(500).fadeOut('slow');
    $('body').delay(300).css({'overflow':'visible'});
    $('#test-slider').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1

    })
    $('#product-card-wrapper').owlCarousel({
        loop: true,
        items: 3,
        center:true,
        navs:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    })
    
    
});