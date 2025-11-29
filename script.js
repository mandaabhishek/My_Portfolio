// Typewriter effect for subtitle
const subtitle = document.querySelector(".typewriter");
const text = "Computer Science Engineering Student";
let index = 0;

function type() {
  if (!subtitle) return;
  subtitle.textContent = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(type, 80);
  }
}
type();

// Scroll reveal for elements with .reveal
const reveals = document.querySelectorAll(".reveal");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // run on load

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Download resume button (opens your PDF)
const resumeBtn = document.getElementById("downloadResumeBtn");

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    window.open("ABHISHEK_RESUMEE.pdf", "_blank"); // same folder as index.html
  });
}

