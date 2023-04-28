// ScrollTrigger 초기화
gsap.registerPlugin(ScrollTrigger);

// locomotive-scroll 초기화
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".inner"),
  smooth: true,
});

// ScrollTrigger와 locomotive-scroll 연결
ScrollTrigger.scrollerProxy(".inner", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".inner").style.transform ? "transform" : "fixed"
});

locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger 트리거
ScrollTrigger.create({
  trigger: ".intro:nth-child(3)",
  scroller: ".inner",
  start: "top 0",
  end: "bottom 0",
  onToggle: self => {
    if (self.isActive) {
      gsap.to(".circle", {scale: 5});
    } else {
      gsap.to(".circle", {scale: 1});
    }
  },
  markers: true // 개발 시에만 사용하는 옵션
});
