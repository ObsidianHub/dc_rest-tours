(function () {
  let tab = document.getElementsByClassName("info-header-tab"),
    tabContent = document.getElementsByClassName("info-tabcontent"),
    info = document.querySelector(".info-header");

  console.log(tab[3]);

  function hideTabContent() {}

  function showTabContent() {}

  info.addEventListener("click", function (e) {
    let target = e.target;
    if (target.className == "info-header-tab") {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });
})();
