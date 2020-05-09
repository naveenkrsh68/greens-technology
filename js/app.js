$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        nav:false,
        responsiveClass:true,
	dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
	
 $('.trainer-profile').owlCarousel({
        items:2,
        loop:false,
        nav:false,
        autoplay:false,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            560:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:3
            }
        }
    })
	
});