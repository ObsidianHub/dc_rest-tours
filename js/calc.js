(function () {
  let persons = document.getElementsByClassName("counter-block-input")[0],
    restDays = document.getElementsByClassName("counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener("change", function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 400;
    if (restDays.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
})();
