/* LET'S ROLL *****************************************************************
* Let's roll is an app for for figuring out which board game to play. The     *
* user inputs info on their game, and it gets held in an array of all of      *
* their games. From there, when the user wants to see what game they should   *
* play, they just input information like how much time they have or how many  *
* players they have, and they will receive a list of games ordered by         *
* proximity to the user search. Additionally, the user can also use the same  *
* input to search for recommendations on games they don't have.               *
****************************************************************/ 'use strict';

// function for meeple spinner

function spinner() {
  var toggle = document.getElementById('goFirstBtn');
  toggle.addEventListener('click', function() {
    this.setAttribute('class', 'spin');
  });
}

spinner();

function startGame(){
  var goFirst = ['Who just had a Birtday?', 'Who is the youngest?', 'Who is the oldest', 'who has the largest shoe size', 'who is the tallest', 'last one to do "noes goes"', 'last person to clean there toilet', 'who must recently finished a noval', 'short man goes first', 'last person to go for a run'];
  var randomFirst = goFirst[Math.floor(Math.random() * goFirst.length)];
  alert (randomFirst);
};

// end of function for meeple spinner



/***** VARIABLE DECLARATIONS *****/




// DOM calls
var form = document.getElementById ('input-form2'); // DOM location of the form to input user game
var mainButton = document.getElementById('btn_main'); // DOM location of the search form
var button = document.getElementById ('btn'); // DOM location of the button for that form
var table = document.getElementById('results-table');



/* TODO ***********************************************************************
* add DOM calls for the search form class. This will be used for both the     *
* "Let's Roll" page and the game recommendations page. The parameters used by *
* this form will be the ones referenced by the testing and sorting methods    *
******************************************************************************/



var gameArray = [];
var passingArray = []; // array to hold the objects that pass the filtering tests




// "who goes first?" information
var goFirst = [ // create new array of different ways to go first, containing:
  'Who just had a Birthday?',
  'Who is the youngest?',
  'Who is the oldest'
]; // end of goFirst array


/***** OBJECT CONSTRUCTOR *****/



function Game (name, minPlayers, maxPlayers, minTime, maxTime, lookOfGame, difficulty) { // construtor for Game objects
  this.name = name; // the title of the game
  this.minPlayers = minPlayers; // the number of players supported by the game
  this.maxPlayers = maxPlayers; // the number of players supported by the game
  this.minTime = minTime; // the minimum amount of time it can take to play
  this.maxTime = maxTime; // the maximum amount of time it can take to play
  this.looksGood = lookOfGame; // does the game have a good theme / art? (y/n)
  this.difficulty = difficulty; // the difficulty of the game on a scale of 1 to 5
} // end Game constructor


/***** PROTOTYPE METHODS *****/


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


var passingArray = []; // array to hold the objects that pass the filtering tests


/***** PROTOTYPE METHODS *****/


Game.prototype.playersMatch = function (formPlayers) {
  for (var i = 0; i < this.numPlayers.length; i++) { // for every possible number of players...
    if (formPlayers === this.numPlayers[i]) { // if that number is equal to the desired number...
      return true; // return true
    } // end if
  } // end for
  return false; // if no hours match, return false
}; // end playersMatch method


Game.prototype.timesMatch = function (formTime) {
  if (this.minTime <= formTime && formTime <= this.maxTime) { // if the game time is equal to the desired time...
    return true; // return true
  } else { // otherwise...
    return false; // return false
  } // end if else
}; // end timesMatch method


Game.prototype.coopMatch = function (formCompetitive) {
  if (formCompetitive = this.isCompetitive) { // if the game is the desired type...
    return true; // return true
  } else { // otherwise...
    return false; // return false
  } // end if else
}; // end coopMatch method


// method: match the form input to the stored value
Game.prototype.artMatch = function (formLooks) {
  if (formLooks = this.looksGood) { // if the game is the desired type...
    return true; // return true
  } else { // otherwise...
    return false; // return false
  } // end if else
}; // end artMatch method


/***** HELPER FUNCTIONS *****/


// function: add an object to the passing array if it passes every test
var addIfPassing = function (gameObject, formPlayers, formTime, formCompetitive, formLooks) {
  if (gameObject.prototype.playersMatch(formPlayers)
    && gameObject.prototype.timesMatch(formTime)
    && gameObject.prototype.coopMatch(formCompetitive)
    && gameObject.prototype.artMatch(formLooks)) { // if the game passes all of the tests...
    passingArray.push(gameObject); // add that game to the array
  } // end if
}; // end function addIfPassing


// function: generate the array of passing games
var updatePassingArray = function (formPlayers, formTime, formCompetitive, formLooks){
  passingArray = []; // reset the passing array
  for (var gameIndex = 0; gameIndex < gameArray.length; gameIndex++){ // for every game...
    addIfPassing(gameArray[gameIndex], formPlayers, formTime, formCompetitive, formLooks); // add object to the passing array if it passes
  } // end for
}; // end function updatePassingArray


// function: return a positive number regardless of the sign of the input number
var flipSign = function (integer) {
  if (integer < 0) { // if the integer is negative
    return integer * -1; // make it positive
  } else { // if the integer is already positive
    return integer; // return it as-is
  } // end if else
}; // end function flipSign


// function: sorts the array of passing games by difficulty, with the top being the closest difficulty to the desired difficulty
var sortByDifficulty = function (passingArray, formDifficulty) {
  var swapped; // declare variable to keep track of if swaps were made (starts as false)
  do { // run this code:
    swapped = false; // set swapped to false
    for (var i = 0; i < passingArray.length - 1; i++) { // for every game that passed the test
      if (flipSign(passingArray[i] - formDifficulty) > flipSign(passingArray[i + 1] - formDifficulty)) { // if the current index is farther away from the input difficulty than the next index...
        var temp = passingArray[i]; // place the value of the current index in a temporary location
        passingArray[i] = passingArray[i + 1]; // replace the current index spot with the next index
        passingArray[i + 1] = temp; // replace the next index spot with the value from the temporary location
        swapped = true; // indicate that a swap was made
      } // end if
    } // end for loop
  } while (swapped); // ...as long as swapped remains true by the end of the loop
}; // end function sortByDifficulty


// // ********************** Who goes first button ***********************


//goesFirst.addEventListener('click', startGame);

// method: check if the input amount of players matches the number of players supported by a game
Game.prototype.playersMatch = function (formPlayers) { // create new method playersMatch, where:


  if (parseInt(this.minPlayers) <= parseInt(formPlayers) && parseInt(formPlayers) <= parseInt(this.maxPlayers)) {
    return true;
  } else {
    return false;
  }
}; // end playersMatch method


// method: check if the input time to play matches the time range supported by the a game
Game.prototype.timesMatch = function (formTime) { // create new method timesMatch, where:
  if (parseInt(this.minTime) <= formTime && formTime <= parseInt(this.maxTime)) { // if the desired time is within to the game range...
    return true; // return true
  } else { // otherwise...
    return false; // return false
  } // end if else
}; // end timesMatch method


// method: check if the user preference on art matches the aesthetics of the game
Game.prototype.looksMatch = function (formLooks) { // create new method artMatch, where:
  if (formLooks === this.looksGood) { // if the game is the desired type...
    return true; // return true
  } else { // otherwise...
    return false; // return false
  } // end if else
}; // end artMatch method


/***** HELPER FUNCTIONS *****/


// function: add an object to the passing array if it passes every test
var addIfPassing = function (gameObject, formPlayers, formTime, formLooks) { // create new function addIfPassing, where:
  if (gameObject.playersMatch (formPlayers) // if the game supports the right amount of players...
    && gameObject.timesMatch (formTime) // and the game supports the right amount of time...
    && gameObject.looksMatch (formLooks)) { // and the game fits the user's art preferences...
    passingArray.push (gameObject); // add that game to the array passingArray
  } // end if
}; // end function addIfPassing


// function: generate the array of passing games
var updatePassingArray = function (formPlayers, formTime, formLooks){ // create new function updatePassingArray, where:
  passingArray = []; // reset the passing array
  for (var gameIndex = 0; gameIndex < gameArray.length; gameIndex++){ // for every game...
    addIfPassing(gameArray[gameIndex], formPlayers, formTime, formLooks); // add object to the passing array if it passes
  } // end for
}; // end function updatePassingArray


// function: return a positive number regardless of the sign of the input number
var flipSign = function (integer) { // create new function flipSign, where:
  if (integer < 0) { // if the integer is negative
    return integer * -1; // make it positive
  } else { // if the integer is already positive
    return integer; // return it as-is
  } // end if else
}; // end function flipSign


// function: sorts the array of passing games by difficulty, with the top being the closest difficulty to the desired difficulty
var sortByDifficulty = function (passingArray, formDifficulty) { // create new function sortByDifficulty, where:

  var swapped; // declare variable to keep track of if swaps were made (starts as false)
  do { // run this code...
    swapped = false; // set swapped to false
    for (var i = 0; i < passingArray.length - 1; i++) { // for every game that passed the test
      if (flipSign(passingArray[i].difficulty - parseInt(formDifficulty)) > flipSign(passingArray[i + 1].difficulty - parseInt(formDifficulty))) { // if the current index is farther away from the input difficulty than the next index...
        var temp = passingArray[i]; // place the value of the current index in a temporary location
        passingArray[i] = passingArray[i + 1]; // replace the current index spot with the next index
        passingArray[i + 1] = temp; // replace the next index spot with the value from the temporary location
        swapped = true; // indicate that a swap was made
      } // end if
    } // end for loop
  } while (swapped); // ...as long as swapped remains true by the end of the loop
}; // end function sortByDifficulty


var shortenPassingArray = function () {
  while (passingArray.length > 6) {
    passingArray.pop();
  }
};


function createCell (property, parent) {
  var td = document.createElement('td');
  td.innerHTML = property;
  parent.appendChild(td);
}


function gameCollection() {
  document.getElementById('results-table').innerHTML = '';
  var newRow;
  for (var i = 0; i < gameArray.length; i++) {
    console.log(event);
    newRow = document.createElement('tr');
    createCell (gameArray[i].name, newRow);
    createCell (gameArray[i].minPlayers, newRow);
    createCell (gameArray[i].maxPlayers, newRow);
    createCell (gameArray[i].minTime, newRow);
    createCell (gameArray[i].maxTime, newRow);
    createCell (gameArray[i].looksGood, newRow);
    createCell (gameArray[i].difficulty, newRow);
    table.appendChild(newRow);
  }
}


var searchResults = function () {
  document.getElementById ('results-table').innerHTML = '';
  var newRow;
  for (var i = 0; i < passingArray.length; i++){
    newRow = document.createElement('tr');
    createCell (passingArray[i].name, newRow);
    createCell (passingArray[i].minPlayers, newRow);
    createCell (passingArray[i].maxPlayers, newRow);
    createCell (passingArray[i].minTime, newRow);
    createCell (passingArray[i].maxTime, newRow);
    createCell (passingArray[i].looksGood, newRow);
    createCell (passingArray[i].difficulty, newRow);
    table.appendChild(newRow);
  }
};


/***** LOCAL STORAGE ****/


var saveGames = function () {
  localStorage.numberOfGames = 0;
  for (var k = 0; k < gameArray.length; k++) {
    localStorage['game ' + k + ' name'] = gameArray[k].name;
    localStorage['game ' + k + ' min number of players'] = gameArray[k].minPlayers;
    localStorage['game ' + k + ' max number of players'] = gameArray[k].maxPlayers;
    localStorage['game ' + k + ' minimum time'] = gameArray[k].minTime;
    localStorage['game ' + k + ' maximum time'] = gameArray[k].maxTime;
    localStorage['game ' + k + ' looks'] = gameArray[k].looksGood;
    localStorage['game ' + k + ' difficulty'] = gameArray[k].difficulty;
    localStorage.numberOfGames++;
  }
};

var loadGames = function () {
  for (var l = 0; l < localStorage.numberOfGames; l++) { // for every game in local storage
    gameArray.push( // add to the game array
      new Game ( // a new game, with parameters:
        localStorage['game ' + l + ' name'],
        localStorage['game ' + l + ' min number of players'],
        localStorage['game ' + l + ' max number of players'],
        localStorage['game ' + l + ' minimum time'],
        localStorage['game ' + l + ' maximum time'],
        localStorage['game ' + l + ' looks'],
        localStorage['game ' + l + ' difficulty']
      ) // end of new game
    ); // end of push
  } // end for loop
}; // end loadGames function


/**** EVENT LISTENERS *****/


/* TODO ***********************************************************************
* add event listener for the "who goes first?" button. Hook this up to the    *
* randomFirst function found below.                                           *
******************************************************************************/


if (button) { // if 'button' exists in HTML...
  button.addEventListener ('click', gameInput); // when the input submission button is clicked, run the gameInput function
} else { // otherwise
  mainButton.addEventListener('click', gameSearch); // when the search button is clicked, run the gameSearch function
} // end if


/***** EVENT HANDLERS *****/


// function: on input form submission, create a new game object and pass it to an array of game objects
function gameInput (event) { // create new function gameInput, where:
  event.preventDefault(); // prevent the page from refreshing
  // get information from the form questions:

  var inputName = event.target.form.elements[0].value; // Name of the game to be added
  var inputMinPlayers = event.target.form.elements[1].value; // Number of players
  var inputMaxPlayers = event.target.form.elements[2].value; // Number of players
  var inputMinTime = event.target.form.elements[3].value; // Min time you can play
  var inputMaxTime = event.target.form.elements[4].value; // Max time you can play
  var inputLook = event.target.form.elements[5].value; // Care about the look of the game?
  var inputDifficulty = event.target.form.elements[6].value; // Difficult level (1 - 5)
  gameArray.push ( // add to the gameArray
    new Game ( // create a new game
      inputName, inputMinPlayers, inputMaxPlayers, inputMinTime, inputMaxTime, inputLook, inputDifficulty // with these parameters

    ) // end new game object
  ); // end pushing to array
  form.reset(); // make the form ready for additional input
  gameCollection();
  saveGames();
} // end function gameInput


// function: on search form submission, sort and order the array of games, then output them in a table
function gameSearch (event) { // create new function gameSearch, where:

  event.preventDefault(); // prevent the page from refreshing
  // get information from the form questions:
  var searchNumPlayers = event.target.form.elements[0].value; // Number of players
  var searchTime = event.target.form.elements[1].value; // Max time you can play
  var searchDifficulty = event.target.form.elements[2].value; // Difficult level (1 - 5)
  var searchLooks = event.target.form.elements[3].value; // Care about the look of the game?

  //TODO: fix this! Form returns as NULL
  // form.reset();

  updatePassingArray(searchNumPlayers, searchTime, searchLooks); // update the objects in the array of "passing" games
  sortByDifficulty(passingArray, searchDifficulty); // sort those games by difficulty
  shortenPassingArray();
  searchResults();
  form.reset();

} // end function gameSearch


/* TODO ***********************************************************************
* hook up randomFirst to a click event on the "who goes first?" button. This  *
* will be the button on the top right of every page.                          *
******************************************************************************/


// function: pick a random way to decide who goes first
var randomFirst = function () { // create new function randomFirst, where:
  return goFirst[Math.floor (Math.random() * goFirst.length)]; // output a random item from the goFirst array

}; // end randomFirst function

/***** start button *****/

function spinner() {
  var toggle = document.getElementById('goFirstBtn');
  toggle.addEventListener('click', function() {
    this.setAttribute('class', 'spin');
  });
}

spinner();

function startGame() {
  var goFirst = ['Who just had a Birtday?', 'Who is the youngest?', 'Who is the oldest', 'who has the largest shoe size', 'who is the tallest', 'last one to do "noes goes"'];
  var randomFirst = goFirst[Math.floor(Math.random() * goFirst.length)];
  alert (randomFirst);
};
// end randomFirst function


// object arrays
if (localStorage.numberOfGames !== 0) {
  loadGames();
}

/***** Clear local storage button *****/

function clearStorage() {
  localStorage.clear();
  location.reload();
}

/***** remove Individual game button *****/

var gameName = document.getElementById('removeButton');
gameName.addEventListener ('click', removeGame);

function removeGame(event) {
  console.log('EVENT', event)
  event.preventDefault();
  var inputName = event.target.form.elements[7].value;
  console.log(inputName);
  for (var i = 0; i < gameArray.length; i++) {
    if(gameArray[i].name === inputName) {
      gameArray.splice(i,1);
    }
  }
  gameCollection();
  saveGames();
}
