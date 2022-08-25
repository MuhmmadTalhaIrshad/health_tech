// ------------------ Navigation  --------------- //
const nav_icon = document.querySelector('.navigation-mob--icon img');
const nav      = document.querySelector('.navigation');
const nav_list = document.querySelector('.navigation-nav');

nav_icon.addEventListener('click', (e)=>{
    e.preventDefault();
    nav.classList.toggle('navigation-open');
});

// ------------------ Slider 2  ------------------ //
var owl = $('.owl-carousel-2');
owl.owlCarousel({
    loop:true,
    // nav:true,
    margin:20,
    responsive:{
      0:{
        items:2
    },
    600:{
        items:4
    },
    1000:{
        items:6
    }
    }
});

// ------------------ Slider 3  ------------------ //
$('.owl-carousel-3').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
});

// ------------------ Slider 1  ------------------ //
var owl = $('.owl-carousel-1');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:25,
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
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

/// ------------------ Slider dots of testimonial section  ------------------ //
const dot_1 = document.querySelector('.label-1');
const dot_2 = document.querySelector('.label-2');
const dot_3 = document.querySelector('.label-3');

const active_dot = function(dot1, dot2, dot3){
    dot1.addEventListener('click', () => {
        dot2.classList.remove('dot-active');
        dot3.classList.remove('dot-active');
        dot1.classList.add('dot-active');
    });
}

active_dot(dot_1, dot_2, dot_3);
active_dot(dot_2, dot_1, dot_3);
active_dot(dot_3, dot_2, dot_1);
