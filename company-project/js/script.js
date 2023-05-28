let navbar=document.querySelector('.navbar');
let icon=document.querySelector('.fa-solid');

icon.onclick = () =>{
    navbar.classList.toggle("active")
}

const swiper = new Swiper('.home-slid',{
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, 
    pagination: {
        el: '.swiper-pagination',
      },
    autoplay: {
          delay: 3000,
    },
  
      
});