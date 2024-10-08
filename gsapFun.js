gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

var tl = gsap.timeline();

tl.from(".site-header, .header-center, .pdf-button", {
  duration: 2,
  y: -100,
  ease: "circ",
});

tl.from(
  ".arbejdsmarkedet-header, .arbejdsmarkedet-img, .arbejdsmarkedet-text",
  {
    duration: 4,
    x: -300,
  },
  "-.5"
);

// Loop over each element with the class .crossout
gsap.utils.toArray(".crossout").forEach((text) => {
  // Create a line element inside the .crossout element
  let line = document.createElement("div");
  line.className = "line";
  text.appendChild(line);

  // Animate the line's scaleX as the user scrolls past
  gsap.to(line, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    scaleX: 1, // Fully extend the line
    duration: 0.3,
    ease: "none", // No easing for a linear effect
  });
});

gsap.to(".konkurrence-header", {
  duration: 2,
  scrollTrigger: {
    trigger: ".konkurrence-header",
    opacity: 0.2,
    scrub: true,
  },
});

gsap.from(".krig-img", {
  x: -100,
  scrollTrigger: {
    trigger: ".krig-header",
    x: 1200,
    scrub: true,
    ease: "circ",
  },
});

mm.add("(min-width: 800px)", () => {
  gsap.fromTo(
    ".konkurrence-img-reverse",
    { x: 100 },
    {
      x: -275,
      scrollTrigger: {
        trigger: ".konkurrence-header",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
});

// Mobile version

mm.add("(max-width: 799px)", () => {
  gsap.fromTo(
    ".konkurrence-img-reverse",
    { x: 100 },
    {
      x: -150,
      scrollTrigger: {
        trigger: ".konkurrence-header",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
});

mm.add("(min-width: 800px)", () => {
  gsap.fromTo(
    ".konkurrence-img",
    { x: -100 },
    {
      x: 275,
      scrollTrigger: {
        trigger: ".konkurrence-header",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
});

// Mobile version

mm.add("(max-width: 799px)", () => {
  gsap.fromTo(
    ".konkurrence-img",
    { x: -100 },
    {
      x: 150,
      scrollTrigger: {
        trigger: ".konkurrence-header",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
});

gsap.to(".bevisthed-question", {
  rotation: 360,
  transformOrigin: "center",
  ease: "none",
  duration: 3,
  repeat: -1,
});
