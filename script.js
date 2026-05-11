// Loading Screen
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Dark Light Mode
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Typing Effect
const text = "Sinh viên | Designer | Creative";
let i = 0;

function typing() {

  if(i < text.length){

    document.querySelector(".typing").textContent += text.charAt(i);

    i++;

    setTimeout(typing,100);

  }

}

typing();

// Scroll Animation
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

  faders.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      item.classList.add("show");

    }

  });

});

// Particle Background
particlesJS("particles-js", {

  particles: {
    number: {
      value: 80
    },

    color: {
      value: "#00ff99"
    },

    line_linked: {
      enable: true
    },

    move: {
      speed: 2
    }
  }

});