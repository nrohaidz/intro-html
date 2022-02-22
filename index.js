let now = new Date();

function formatDay(date) {
  let days = "Sunday";
  ("Monday");
  ("Tuesday");
  ("Wednesday");
  let currentDay = days[date.getDay()];
  let formattedDay = `${currentDay}`;
  return formattedDay;
}
let hour = now.getHours();
let minutes = now.getMinutes();

let currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `${format.Day(now)} ${hour}:${minutes}`;

function locationChosen(event) {
  event.preventDefault();
  let locationInput = document.querySelector("#location-input");
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${locationInput.value}`;
  if (locationInput.value === 0) h4.innerHTML = "Please search for a city";
}
let locationForm = document.querySelector("#location-input");
locationForm.addEventListener("submit", locationChosen);

function convertC(event) {
  event.preventDefault();
  let temperature = document.querySelector(".nowTemp");
  temperature.innerHTML = 40;
}
function convertF(event) {
  event.preventDefault();
  let temperature = document.querySelector(".nowTemp");
  temperature.innerHTML = 104;
}

let cUnit = document.querySelector("#cTemp");
cUnit.addEventListener("click", convertC);

let fUnit = document.querySelector("#fTemp");
fUnit.addEventListener("click", convertF);
