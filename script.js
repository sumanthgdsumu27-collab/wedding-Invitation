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

window.scrollBy({
  top: window.innerHeight,
  behavior: "smooth"
});

