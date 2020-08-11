(function () {
  const links = document.querySelectorAll(".header ul a");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
})();
