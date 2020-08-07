(function () {
  let tab = document.getElementsByClassName("info-header-tab"),
    tabContent = document.getElementsByClassName("info-tabcontent"),
    info = document.querySelector(".info-header");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(a) {
    if (tabContent[a].classList.contains("hide")) {
      hideTabContent(0);
      tabContent[a].classList.remove("hide");
      tabContent[a].classList.add("show");
    }
  }

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
