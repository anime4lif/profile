const header=document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});
// nav bar close and open icon
const menu=document.querySelector(".menu-icon");
const navlist=document.querySelector(".navlist");
const one=document.querySelector(".bar-one");
const two=document.querySelector(".bar-two")
const three=document.querySelector(".bar-three");

menu.onclick = () =>{
    navlist.classList.toggle("open");
    one.classList.toggle("first");
    two.classList.toggle("secon");
    three.classList.toggle("last");
}

// show more about me
const show=document.querySelector(".showMore");
const hidden=document.querySelector(".More");
const image=document.querySelector(".photo");
// const after=document.querySelector(".about-text");
show.onclick = () =>{
    hidden.classList.toggle("show");

}