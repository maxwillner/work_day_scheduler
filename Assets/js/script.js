var displayDateEl = document.querySelector("#currentDay");

var time = moment().format("LL");

var date = function() {
    var todayDateEl = document.createElement("p");
    todayDateEl.textContent = time;
    displayDateEl.appendChild(todayDateEl);
}

date();
