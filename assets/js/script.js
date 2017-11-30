$(document).ready(function(){

    // Click event for active self class
     $('.star,.filter-btns .tour-btn').on('click',function(e){
         $(this).toggleClass('active');
         e.preventDefault();
     })

    //  Carousel for gallery slide Index page
    $(".owl-carousel.gallery-slider").owlCarousel({
        loop: true,
        autoWidth:true,
        nav: true,
        dots: false,
        navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
        singleItem: true
   });
});