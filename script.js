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
  }, 4000); // 2 seconds delay



