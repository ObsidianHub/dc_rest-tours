(function () {
  let deadline = "2021-01-01";

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");
  }

  setClock("timer", deadline);
})();
