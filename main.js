const btn =document.querySelector(".nav-btn");
const nav =document.querySelector("nav");

btn.addEventListener("click", ()=>{
    nav.classList.toggle("toggle")
});

document.addEventListener('DOMContentLoaded', function(){
    const videos = document.querySelectorAll('video');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                if (document.visibilityState === 'visible') {
                entry.target.play();
                }
            } else{
                entry.target.pause();
            }
        });
    });
    videos.forEach((video) =>{
        observer.observe(video);
    });

});

