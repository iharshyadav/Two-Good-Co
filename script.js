const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});    

var playbtn = document.querySelector(".play");

var videos = document.querySelector(".video");

function mouseenter (){
    videos.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
    })
    
    videos.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    })
}

mouseenter()

videos.addEventListener("mousemove",function(e){
    gsap.to(playbtn,{
        left:e.x-40,
        top:e.y-45
    })
})



























