// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

  /* ===========================
     1. AUTOMATIC SCROLL ON LOAD
     =========================== */

  setTimeout(function () {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }, 2000); // 2 seconds delay


  /* ===========================
     2. SCROLL ARROW FUNCTION
     =========================== */

  const arrow = document.getElementById("autoScrollArrow");

  if (arrow) {

    // Scroll when arrow is clicked
    arrow.addEventListener("click", function () {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
      });
    });

    // Hide arrow after scrolling
    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight / 2) {
        arrow.style.display = "none";
      } else {
        arrow.style.display = "block";
      }
    });

  }

});
const music = document.getElementById("bgMusic");
let musicStarted = false;

function startMusic() {
  if (!musicStarted && music) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

window.addEventListener("scroll", startMusic);
window.addEventListener("click", startMusic);
document.addEventListener("DOMContentLoaded", function () {

  const music = document.getElementById("bgMusic");
  let musicStarted = false;

  function startMusic() {
    if (!musicStarted && music) {
      music.play().then(() => {
        musicStarted = true;
        console.log("Music started");
      }).catch((err) => {
        console.log("Playback prevented:", err);
      });
    }
  }

  // Multiple interaction triggers for mobile safety
  document.addEventListener("click", startMusic, { once: true });
  document.addEventListener("touchstart", startMusic, { once: true });
  document.addEventListener("scroll", startMusic, { once: true });

});
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("enterBtn");
  const overlay = document.getElementById("musicOverlay");
  const music = document.getElementById("bgMusic");

  btn.addEventListener("click", function () {
    music.play();
    overlay.style.display = "none";
  });

});
window.scrollBy({
  top: window.innerHeight,
  behavior: "smooth"
});
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("enterBtn");
  const overlay = document.getElementById("musicOverlay");
  const music = document.getElementById("bgMusic");

  btn.addEventListener("click", function () {

    music.play();

    overlay.style.opacity = "0";

    setTimeout(() => {
      overlay.style.display = "none";

      // Slow smooth scroll after entering
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });

    }, 500);

  });

});
