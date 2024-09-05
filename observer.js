const options = {
  threshold: [0.4, 0.8], // 0.4 = 40%, 0.8 = 80%
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const targets = document.querySelectorAll(".section-observed"); // grab all elements with the class 'section'

// Loop through each target and observe it
targets.forEach((target) => {
  observer.observe(target);
});
