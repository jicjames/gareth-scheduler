//
// variables declaration
//

// get the saved data
const savedData = JSON.parse(window.localStorage.getItem("taskData")); // How do I get this to show my stuff

let timeBlockEL = document.querySelector(".timeBlock");
let btnEL = document.querySelector(".btn");
const saveButtons = document.querySelectorAll(".saveBtn");
const schedule = document.querySelector(".schedule");
const timeBlocks = document.querySelectorAll(".timeBlock");

// colors
const pastColor ="#B2BABB";
const presentColor ="#F1C40F";
const futureColor = "#CD5C5C";

//
// Functions
//

// Using Moment.js to update the time in the title.
function updateDate() {
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(date);
}

// do something with the save data
function renderSavedData() {

  if(savedData) { // if saved data exists (is not null)

    savedData.forEach(function(item, index){
      if(item !== "") {
  
        // get the timeblock which corresponds to the current saved data element.
        const blockToUpdate = timeBlocks[index];
  
        blockToUpdate.value = item;
      }
    });
  }
}

//Render Background Colors according to the time
function renderBackgroundColor() {
  let currentTime = parseInt(moment().format("H"));
  let id = document.querySelector("textarea");
  // let timeEL = parseInt(id.getAttribute("id")); // This is not working, how to get the element ID and parse it as a number
  // console.log(timeEL);

   // create array of time blocks to loop through
  console.log("Current time: ", parseInt(moment().format("H"))); // log the current time for reference


  timeBlocks.forEach(function(block) {

    const blockTime = parseInt(block.id);
    // console.log("block time: ", blockTime);

    if (blockTime < currentTime) {
          block.style.backgroundColor = pastColor; //Green
        } else if (blockTime === currentTime) {
          block.style.backgroundColor = presentColor; //Yellow
        } else {
          block.style.backgroundColor = futureColor; //Red
        }
  });
}

//
//Event Listener
//
schedule.addEventListener("click", function(event){
  // console.log("clicked in the schedule");
  // console.log(event.target);

  // check if the click target is inside a button.
  const saveBtn = event.target.closest(".saveBtn");
  if(saveBtn) {
    const newData = [];

    // get all the text from all the textAreas and push to an array
    timeBlocks.forEach(function(block){
      newData.push(block.value);
    });

    window.localStorage.setItem("taskData", JSON.stringify(newData));

  } 
});




// Invoke Functions
updateDate();
renderBackgroundColor();
renderSavedData();


// localstorage key steps

// step 1
// COLLECT THE DATA

// step 2
// SAVE DATA TO STORAGE

// step 3
// LOAD FROM STORAGE (this should be done as early as possible when your page loads)

// step 4
// DO SOMETHING WITH THE DATA