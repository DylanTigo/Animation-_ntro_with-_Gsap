const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const timeline = gsap.timeline();
timeline
  .from(item1, {
    duration: 2.5,
    keyframes: [
      { x: 0, ease: "power2.in" },
      { x: "20vw", ease: "power4.out", duration: 0.8 },
    ],
  })
  .from(
    item2,
    {
      duration: 2.5,
      keyframes: [
        { x: 0, ease: "power2.in" },
        { x: "-20vw", ease: "power4.out", duration: 0.8 },
      ],
    },
    "<"
  )
  .to(
    ".welcome",
    {
      y: 0,
      delay: 0.3,
    },
    "1"
  )
  .from(item1, {
    delay: 1,
    keyframes: [{ x: 10, ease: "power2.in"}],
  })
  .from(
    item2,
    {
      keyframes: [{ x: -10, ease: "power2.in"}],
    },
    "<"
  )
  .to(
    ".welcome",
    {
      y: "-100%",
      opacity: 0,
      duration: 0.2,
      delay: 0.3,
    },
    "<"
  ).to(".blockContainer", {
    rotate: 410
  }).to(".item", {
    width: 45,
    height: 45,
    borderRadius: 9999,
    duration: .3
  }, "<").to(item1, {
    x: -10,
    duration: .3
  }).to(item2, {
    x: 10,
    duration: .3
  }, "-=.1").to( ".loaderContainer", {
    autoAlpha: 0
  })
