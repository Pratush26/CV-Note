// Add all your JS her
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
var path = "M10 10 Q 50 10 90 10";
var fpath = "M10 10 Q 50 10 90 10";
var s = document.querySelector("#svg");
var music = document.querySelector("#audio");
s.addEventListener('mousemove',function (dets) {
  console.log("oh my god");
  console.log(dets);
  path = `M10 10 Q ${dets.x} ${dets.x} 90 10`;
  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"
  })
})
s.addEventListener('mouseleave',function (le) {
  console.log("left");
  music.play();
  gsap.to("svg path",{
    attr:{d:fpath},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
  })
})