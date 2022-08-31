$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


const menu = document.querySelector('.btn-active');
const ulnav = document.querySelector('.ul-nav');
const btnactive2 = document.querySelector('.btn-active2');


 menu.addEventListener('click',function(){
    ulnav.classList.add('is-active');
    ulnav.classList.remove('is-active2');
})


btnactive2.addEventListener('click', function(){
    ulnav.classList.add('is-active2');
    ulnav.classList.remove('is-active');
})
