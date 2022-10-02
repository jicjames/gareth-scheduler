//
// variables Decorations
//
let timeBlockEL = document.querySelector(".timeBlock");
let btnEL = document.querySelector(".btn");
let task = [];

//
// Functions
//

// Using Moment.js to update the time in the title.
function updateDate() {
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(date);
}

//Render Background Colors according to the time
function renderBackgroundColor() {
  let currentTime = parseInt(moment().format("H"));
  let timeEL = parseInt(document.getElementById("intro")); // This is not working, how to get the element ID and parse it as a number
  console.log(timeEL);
  if (timeEL < currentTime) {
    timeBlockEL.style.backgroundColor = "#B2BABB"; //Green
  } else if (timeEL === currentTime) {
    timeBlockEL.style.backgroundColor = "#F1C40F "; //Yellow
  } else {
    timeBlockEL.style.backgroundColor = "#CD5C5C"; //Red
  }
}

//
//Event Listener
//

// Eventlistener for local storage when we click the save button
btnEL.addEventListener("click", function () {
  localStorage.setItem("task", JSON.stringify(task)); // This is also not working, not saving to the local storage
});

// Invoke Functions
updateDate();
renderBackgroundColor();
JSON.parse(window.localStorage.getItem("task")); // How do I get this to show my stuff
