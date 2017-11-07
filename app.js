'use strict';

var button = document.getElementById('btn');
var form = document.getElementById('input-form');
var goesFirst = document.getElementById('goes_first');


var gameArray = [];

function GameGenerator(gameName, numOfPlayer, minTime, lookOfGame, difficultyLvl, maxTime) { // object construtor
  this.gameName = gameName;
  this.numOfPlayer = numOfPlayer;
  this.minTime = minTime;
  this.maxTime = maxTime;
  this.lookOfGame = lookOfGame;
  this.difficultyLvl = difficultyLvl;
};


button.addEventListener('click', getFromInfo);


function getFromInfo(event) {
  event.preventDefault();
  console.log(event);

  var gameName = event.target.form.elements[0].value;
  var numOfPlayer = event.target.form.elements[1].value;
  var minTime = event.target.form.elements[2].value;
  var lookOfGame = event.target.form.elements[3].value;
  var difficultyLvl = event.target.form.elements[4].value;
  var maxTime = event.target.form.elements[5].value;

  gameArray.push(new GameGenerator(gameName, numOfPlayer, minTime, lookOfGame, difficultyLvl, maxTime));
  form.reset();
  gameToTable();
  console.log('test gamearray:', gameArray);

};





// function Game(name, numPlayers, playTime, skillLevel, isCompetitive, isThematic, pictureLink, description) {
//  this.name = name,
//  this.numPlayers = numPlayers,
//  this.playTime = playTime,
//  this.skillLevel = skillLevel,
//  this.isCompetitive = isCompetitive,
//  this.isThematic = isThematic,
//  this.pictureLink = pictureLink,
//  this.description = description;
// }


/***** VARIABLE DECLARATIONS *****/

//
// var passingArray = []; // array to hold the objects that pass the filtering tests
//
//
// /***** PROTOTYPE METHODS *****/
//
//
// Game.prototype.playersMatch = function (formPlayers) {
//   for (var i = 0; i < this.numPlayers.length; i++) { // for every possible number of players...
//     if (formPlayers === this.numPlayers[i]) { // if that number is equal to the desired number...
//       return true; // return true
//     } // end if
//   } // end for
//   return false; // if no hours match, return false
// }; // end playersMatch method
//
//
// Game.prototype.timesMatch = function (formTime) {
//   if (this.minTime <= formTime && formTime <= this.maxTime) { // if the game time is equal to the desired time...
//     return true; // return true
//   } else { // otherwise...
//     return false; // return false
//   } // end if else
// }; // end timesMatch method
//
//
// Game.prototype.coopMatch = function (formCompetitive) {
//   if (formCompetitive = this.isCompetitive) { // if the game is the desired type...
//     return true; // return true
//   } else { // otherwise...
//     return false; // return false
//   } // end if else
// }; // end coopMatch method
//
//
// // method: match the form input to the stored value
// Game.prototype.artMatch = function (formLooks) {
//   if (formLooks = this.looksGood) { // if the game is the desired type...
//     return true; // return true
//   } else { // otherwise...
//     return false; // return false
//   } // end if else
// }; // end artMatch method
//
//
// /***** HELPER FUNCTIONS *****/
// //
// //
// // // function: add an object to the passing array if it passes every test
// // var addIfPassing = function (gameObject, formPlayers, formTime, formCompetitive, formLooks) {
// //   if (gameObject.prototype.playersMatch(formPlayers)
// //     && gameObject.prototype.timesMatch(formTime)
// //     && gameObject.prototype.coopMatch(formCompetitive)
// //     && gameObject.prototype.artMatch(formLooks)) { // if the game passes all of the tests...
// //     passingArray.push(gameObject); // add that game to the array
// //   } // end if
// // }; // end function addIfPassing
// //
// //
// // // function: generate the array of passing games
// // var updatePassingArray = function (formPlayers, formTime, formCompetitive, formLooks){
// //   passingArray = []; // reset the passing array
// //   for (var gameIndex = 0; gameIndex < gameArray.length; gameIndex++){ // for every game...
// //     addIfPassing(gameArray[gameIndex], formPlayers, formTime, formCompetitive, formLooks); // add object to the passing array if it passes
// //   } // end for
// // }; // end function updatePassingArray
// //
// //
// // // function: return a positive number regardless of the sign of the input number
// // var flipSign = function (integer) {
// //   if (integer < 0) { // if the integer is negative
// //     return integer * -1; // make it positive
// //   } else { // if the integer is already positive
// //     return integer; // return it as-is
// //   } // end if else
// // }; // end function flipSign
// //
// //
// // // function: sorts the array of passing games by difficulty, with the top being the closest difficulty to the desired difficulty
// // var sortByDifficulty = function (passingArray, formDifficulty) {
// //   var swapped; // declare variable to keep track of if swaps were made (starts as false)
// //   do { // run this code:
// //     swapped = false; // set swapped to false
// //     for (var i = 0; i < passingArray.length - 1; i++) { // for every game that passed the test
// //       if (flipSign(passingArray[i] - formDifficulty) > flipSign(passingArray[i + 1] - formDifficulty)) { // if the current index is farther away from the input difficulty than the next index...
// //         var temp = passingArray[i]; // place the value of the current index in a temporary location
// //         passingArray[i] = passingArray[i + 1]; // replace the current index spot with the next index
// //         passingArray[i + 1] = temp; // replace the next index spot with the value from the temporary location
// //         swapped = true; // indicate that a swap was made
// //       } // end if
// //     } // end for loop
// //   } while (swapped); // ...as long as swapped remains true by the end of the loop
// // }; // end function sortByDifficulty
// //
// //
// // // ********************** Who goes first button ***********************
//
// function startGame(){
//   var goFirst = ['Who just had a Birtday?', 'Who is the youngest?', 'Who is the oldest', 'who has the largest shoe size', 'who is the tallest', 'last one to do "noes goes"'];
//   var randomFirst = goFirst[Math.floor(Math.random() * goFirst.length)];
//   alert (randomFirst);
// };
// goesFirst.addEventListener('click', startGame);
//



var table = document.getElementById('results-table');
console.log(table);

function gameToTable() {

  document.getElementById('results-table').innerHTML = '';
  var newRow;
  var td;
  for (var i = 0; i < gameArray.length; i++) {
    newRow = document.createElement('tr');
    console.log('this is the talbe', table);
    for(var prop in gameArray[i]) {
      td = document.createElement('td');
      td.innerHTML = gameArray[i][prop];
      newRow.appendChild(td);
    }
    table.appendChild(newRow);
  };
};

//************************** Local Storage ************************//

if (localStorage.totalClicks == 25) {
  displayedImage = JSON.parse(localStorage.runningTest);
  removeListeners();
  document.getElementById('random-images').innerHTML = '';
  buildTable();
}

var runningTest = [];
function saveTest() {
  if (storedMovies = []) {
    runningTest.push(JSON.stringify(displayedImage));
    localStorage.runningTest = runningTest;
  }
}

function loadTest() {
  if(localStorage.runningTest) {
    runningTest = localStorage.runningTest.split(',');
    runningTest = JSON.parse(runningTest);
    console.log(runningTest);
    displayedImage = runningTest;
  }
};

loadTest();
