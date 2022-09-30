const burger=document.querySelector(".burger");
const navLists=document.querySelector(".nav-lists");
const navimage=document.querySelector(".nav-image");
const navSlide=()=>{
burger.addEventListener("click",()=>{
    navimage.classList.toggle("nav-image1");
    navLists.classList.toggle("navlists");
});
}
function scrollAppear(){
    var introText1=document.querySelector(".third");
    var introText2=document.querySelector(".fourth");
    var introText3=document.querySelector(".lastline");
    var introText4=document.querySelector(".gallery");
    var introPosition1=introText1.getBoundingClientRect().top;
    var introPosition2=introText2.getBoundingClientRect().top;
    var introPosition3=introText3.getBoundingClientRect().top;
    var introPosition4=introText4.getBoundingClientRect().top;
    var screenPosition=window.innerHeight/1;
    if(introPosition1<screenPosition)
    {
    introText1.classList.add("matter-appear");
    }
    if(introPosition2<screenPosition)
    {
     introText2.classList.add("matter-appear");
    }
    if(introPosition3<screenPosition)
    {
     introText3.classList.add("matter-appear");
    }
    if(introPosition4<screenPosition)
    {
     introText4.classList.add("matter-appear");
    }
}
function scrollAppear1(){
    var loader=document.querySelector(".preloader");
    loader.style.display="none";
    var introTexts=document.querySelector(".second");
    var introText=document.querySelector(".matter");
    introText.classList.add("matter-appear");
    introTexts.classList.add("matter-appear");
}
window.addEventListener("scroll",scrollAppear);
window.addEventListener("load",scrollAppear1);
navSlide();