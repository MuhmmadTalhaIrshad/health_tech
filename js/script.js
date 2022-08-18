// ------------------ Navigation  --------------- //
const nav_icon = document.querySelector('.navigation-mob--icon img');
const nav      = document.querySelector('.navigation');
const nav_list = document.querySelector('.navigation-nav');

nav_icon.addEventListener('click', (e)=>{
    nav.classList.toggle('navigation-open');
});

$('.owl-carousel-3').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
});

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
            items:4
        },
        1000:{
            items:5
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