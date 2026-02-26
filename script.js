document.addEventListener("DOMContentLoaded", function () {

  // Always start at top (first page)
  window.scrollTo(0, 0);

  // Disable browser scroll memory
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

});
