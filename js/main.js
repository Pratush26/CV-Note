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
    end:"top 100%",
    scrub:2
  }
})