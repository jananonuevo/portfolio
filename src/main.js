const { animate, stagger, inView } = Motion;

const elements = document.querySelectorAll(".proglang div");

animate(
    elements, 
    { scale: [0.4, 1] },
    { ease: "circInOut", duration: 1.2 }
);