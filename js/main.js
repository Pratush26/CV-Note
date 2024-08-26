// Add all your JS her
let load = document.querySelector('#loadpage')
let page = document.querySelector('#page-content')

window.addEventListener('load',()=>{
  load.classList.add('hidden')
  page.classList.add('visible')
})

let body = document.querySelector("body");
body.addEventListener('mousemove',(pos)=>{
  gsap.to("#cursor",{
    x:pos.x,
    y:pos.y,
    duration:.6
  })
})
gsap.from(".wr",{
  y:30,
  duration:2,
  opacity:0,
  stagger:1
})
gsap.from("#sub",{
  x:-50,
  opacity:0,
  scrollTrigger:{
    trigger:"#sub",
    scroller:"body",
    start:"top 95%",
    end:"top 85%",
    scrub:2,
    //markers:true,
    //pin:true
  }
})
var path = "M 10 80 Q 95 80 380 80";
var fpath = "M 10 80 Q 95 80 380 80";
var s = document.querySelector("#svg");
var music = document.querySelector("audio");
s.addEventListener('mousemove',function(dets){
  console.log(dets);
  path = `M10 80 Q ${dets.x} ${dets.y} 380 80`;
  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"
  })
})
s.addEventListener('mouseleave',function (le) {
  music.play();
  gsap.to("svg path",{
    attr:{d:fpath},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
  })
})