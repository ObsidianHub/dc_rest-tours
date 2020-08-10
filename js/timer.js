(function () {
  let deadline = "2020-08-10";

  function getTimeRemaining(endtime) {
    let total = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((total / 1000) % 60),
      minutes = Math.floor((total / 1000 / 60) % 60),
      hours = Math.floor(total / (1000 * 60 * 60));

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");

    function updateClock() {
      let time = getTimeRemaining(endtime);
      hours.innerHTML = time.hours;
      minutes.innerHTML = time.minutes;
      seconds.innerHTML = time.seconds;
    }

    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
  }

  setClock("timer", deadline);
})();
