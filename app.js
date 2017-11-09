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
var libraryButton = document.getElementById ('btn_lib');
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



function Game (name, minPlayers, maxPlayers, minTime, maxTime, lookOfGame, difficulty, pictureLink, description, bggLink) { // construtor for Game objects
  this.name = name; // the title of the game
  this.minPlayers = minPlayers; // the number of players supported by the game
  this.maxPlayers = maxPlayers; // the number of players supported by the game
  this.minTime = minTime; // the minimum amount of time it can take to play
  this.maxTime = maxTime; // the maximum amount of time it can take to play
  this.looksGood = lookOfGame; // does the game have a good theme / art? (y/n)
  this.difficulty = difficulty; // the difficulty of the game on a scale of 1 to 5
  this.pictureLink = pictureLink;
  this.description = description;
  this.bggLink = bggLink;
} // end Game constructor


/***** PROTOTYPE METHODS *****/

//
// // function Game(name, numPlayers, playTime, skillLevel, isCompetitive, isThematic, pictureLink, description) {
// //  this.name = name,
// //  this.numPlayers = numPlayers,
// //  this.playTime = playTime,
// //  this.skillLevel = skillLevel,
// //  this.isCompetitive = isCompetitive,
// //  this.isThematic = isThematic,
// //  this.pictureLink = pictureLink,
// //  this.description = description;
// // }
//
//
// /***** VARIABLE DECLARATIONS *****/
//
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
//
//
// // function: add an object to the passing array if it passes every test
// var addIfPassing = function (gameObject, formPlayers, formTime, formCompetitive, formLooks) {
//   if (gameObject.prototype.playersMatch(formPlayers)
//     && gameObject.prototype.timesMatch(formTime)
//     && gameObject.prototype.coopMatch(formCompetitive)
//     && gameObject.prototype.artMatch(formLooks)) { // if the game passes all of the tests...
//     passingArray.push(gameObject); // add that game to the array
//   } // end if
// }; // end function addIfPassing
//
//
// // function: generate the array of passing games
// var updatePassingArray = function (formPlayers, formTime, formCompetitive, formLooks){
//   passingArray = []; // reset the passing array
//   for (var gameIndex = 0; gameIndex < gameArray.length; gameIndex++){ // for every game...
//     addIfPassing(gameArray[gameIndex], formPlayers, formTime, formCompetitive, formLooks); // add object to the passing array if it passes
//   } // end for
// }; // end function updatePassingArray
//
//
// // function: return a positive number regardless of the sign of the input number
// var flipSign = function (integer) {
//   if (integer < 0) { // if the integer is negative
//     return integer * -1; // make it positive
//   } else { // if the integer is already positive
//     return integer; // return it as-is
//   } // end if else
// }; // end function flipSign
//
//
// // function: sorts the array of passing games by difficulty, with the top being the closest difficulty to the desired difficulty
// var sortByDifficulty = function (passingArray, formDifficulty) {
//   var swapped; // declare variable to keep track of if swaps were made (starts as false)
//   do { // run this code:
//     swapped = false; // set swapped to false
//     for (var i = 0; i < passingArray.length - 1; i++) { // for every game that passed the test
//       if (flipSign(passingArray[i] - formDifficulty) > flipSign(passingArray[i + 1] - formDifficulty)) { // if the current index is farther away from the input difficulty than the next index...
//         var temp = passingArray[i]; // place the value of the current index in a temporary location
//         passingArray[i] = passingArray[i + 1]; // replace the current index spot with the next index
//         passingArray[i + 1] = temp; // replace the next index spot with the value from the temporary location
//         swapped = true; // indicate that a swap was made
//       } // end if
//     } // end for loop
//   } while (swapped); // ...as long as swapped remains true by the end of the loop
// }; // end function sortByDifficulty
//
//
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
  if (parseInt(this.minTime) <= parseInt(formTime) && parseInt(formTime) <= parseInt(this.maxTime)) { // if the desired time is within to the game range...
    return true; // return true
  } else { // otherwise...
    return false; // return false
  } // end if else
}; // end timesMatch method


// method: check if the user preference on art matches the aesthetics of the game
Game.prototype.looksMatch = function (formLooks) { // create new method artMatch, where:
  if (formLooks === this.looksGood || formLooks === 'false') { // if the game is the desired type...
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
var updatePassingArray = function (formPlayers, formTime, formLooks, objectArray){ // create new function updatePassingArray, where:
  passingArray = []; // reset the passing array
  for (var gameIndex = 0; gameIndex < objectArray.length; gameIndex++){ // for every game...
    addIfPassing(objectArray[gameIndex], formPlayers, formTime, formLooks); // add object to the passing array if it passes
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
    createCell (gameArray[i].pictureLink, newRow);
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
    localStorage['game ' + k + ' picture link'] = gameArray[k].pictureLink;
    localStorage['game ' + k + ' BGG link'] = gameArray[k].bggLink;
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
        localStorage['game ' + l + ' difficulty'],
        localStorage['game ' + l + ' picture link'],
        localStorage['game ' + l + ' BGG link']
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
} else if (mainButton){ // otherwise
  mainButton.addEventListener('click', gameSearch); // when the search button is clicked, run the gameSearch function
} else if (libraryButton) {
  libraryButton.addEventListener('click', librarySearch);
}


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

  updatePassingArray(searchNumPlayers, searchTime, searchLooks, gameArray); // update the objects in the array of "passing" games
  sortByDifficulty(passingArray, searchDifficulty); // sort those games by difficulty
  shortenPassingArray();
  searchResults();
  form.reset();

} // end function gameSearch

function librarySearch (event) { // create new function gameSearch, where:

  event.preventDefault(); // prevent the page from refreshing
  // get information from the form questions:
  var searchNumPlayers = event.target.form.elements[0].value; // Number of players
  var searchTime = event.target.form.elements[1].value; // Max time you can play
  var searchDifficulty = event.target.form.elements[2].value; // Difficult level (1 - 5)
  var searchLooks = event.target.form.elements[3].value; // Care about the look of the game?

  //TODO: fix this! Form returns as NULL
  // form.reset();

  updatePassingArray(searchNumPlayers, searchTime, searchLooks, ourGameArray); // update the objects in the array of "passing" games
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

var ourGameArray = [

  new Game('Caylus', 2, 5, 60, 150, 'false', 4, 'https://cf.geekdo-images.com/xAtnSiJMCFYKpOy9mujcchgZ4jo=/fit-in/246x300/pic1638795.jpg', '1289. To strengthen the borders of the Kingdom of France, King Philip the Fair decided to have a new castle built. For the time being, Caylus is but a humble village, but soon, workers and craftsmen will be flocking by the cartload, attracted by the great prospects. Around the building site, a city is slowly rising up.', 'https://boardgamegeek.com/boardgame/18602/caylus'),

  new Game('Hey That\'s My Fish', 2, 4, 20, 20, 'true', 1, 'https://cf.geekdo-images.com/Al-KEFlwcSGMmjbcbJpSje58gUQ=/fit-in/246x300/pic1004115.jpg', 'In Hey, That\'s My Fish!, players want to catch as many fish as possible with their waddle of penguins. Each turn, a player moves one penguin in a straight line over hex-shaped ice tiles with 1, 2 or 3 fish on them. The player then collects the hex from where the penguin started its movement from the table, thereby creating a gap which penguins can\'t cross on future turns. When a penguin can\'t move, it\'s removed from play with its owner claiming the tile on which it stands. The player who collects the most fish wins.', 'https://boardgamegeek.com/boardgame/8203/hey-s-my-fish'),

  new Game('The Resistence', 5, 10, 20, 40, 'false', 2, 'https://cf.geekdo-images.com/images/pic1392135_md.png', 'The Resistance is a party game of social deduction. It is designed for five to ten players, lasts about 30 minutes, and has no player elimination. The Resistance is inspired by Mafia/Werewolf, yet it is unique in its core mechanics, which increase the resources for informed decisions, intensify player interaction, and eliminate player elimination.', 'https://boardgamegeek.com/boardgame/41114/resistance'),

  // actually 4 difficulty
  new Game('Agricola', 1, 5, 30, 60, 'true', 4, 'https://cf.geekdo-images.com/MkVLwT3DDgaauwZzLMpgrC7uaX8=/fit-in/246x300/pic259085.jpg', 'In Agricola, you\'re a farmer in a wooden shack with your spouse and little else. On a turn, you get to take only two actions, one for you and one for the spouse, from all the possibilities you\'ll find on a farm: collecting clay, wood, or stone; building fences; and so on. You might think about having kids in order to get more work accomplished, but first you need to expand your house. And what are you going to feed all the little rugrats?', 'https://boardgamegeek.com/boardgame/31260/agricola'),

  new Game('Power Grid', 3, 6, 90, 120, 'false', 4, 'https://cf.geekdo-images.com/NqkNl_ZKW8XHQRZpNB9kmnqGr7U=/fit-in/246x300/pic173153.jpg', 'The objective of Power Grid is to supply the most cities with power when someone\'s network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then bid against each other to purchase the power plants that they use to power their cities.', 'https://boardgamegeek.com/boardgame/2651/power-grid'),

  new Game('Sushi Go', 2, 5, 10, 15, 'true', 1, 'https://cf.geekdo-images.com/m0iWupkf91Km8pS-hH5EOwLPEUo=/fit-in/246x300/pic1900075.jpg', 'In the super-fast sushi card game Sushi Go!, you are eating at a sushi restaurant and trying to grab the best combination of sushi dishes as they whiz by. Score points for collecting the most sushi rolls or making a full set of sashimi. Dip your favorite nigiri in wasabi to triple its value! And once you\'ve eaten it all, finish your meal with all the pudding you\'ve got! But be careful which sushi you allow your friends to take; it might be just what they need to beat you!', 'https://boardgamegeek.com/boardgame/133473/sushi-go'),

  new Game('Happy Salmon', 3, 6, 2, 5, 'true', 1, 'https://cf.geekdo-images.com/h5btTyDVwMAhfjD_lx9oo6ylJ_w=/fit-in/246x300/pic2913980.png', 'Happy Salmon is a simple, ultra-fast, very silly card game.  There are no turns. Players call out the action shown on their cards as fast as they can. When two players have a match, they celebrate by performing the action. Actions include the classic "High 5", the unifying "Pound It", the frantic "Switcheroo", and the delightful and bizarre "Happy Salmon".  Each time a player celebrates a match, they quickly discard a card. The first person to get rid of all their cards wins.', 'https://boardgamegeek.com/boardgame/194626/happy-salmon'),

  new Game('Catacombs', 2, 5, 60, 90, 'false', 2, 'https://cf.geekdo-images.com/7xw4TqjFZKRiHwuEf5nl8nV4C0Y=/fit-in/246x300/pic1258597.jpg', 'Catacombs is an action/dexterity-based adventure board game. One player controls the Overseer, controlling the monsters of the catacombs; the other player(s) control the four heroes who cooperatively try to defeat the monsters and eventually the Catacomb Lord. Each of the heroes has special abilities that must also be used effectively if they are to prevail.', 'https://boardgamegeek.com/boardgame/57390/catacombs'),

  new Game('New York Slice', 2, 6, 30, 40, 'true', 2, 'https://cf.geekdo-images.com/eVmX29c_pPOSrxBe-RvSSOp0pWg=/fit-in/246x300/pic3211823.jpg', 'In New York Slice, each player slices pizzas into portions, giving their opponents first choice, while they take the leftovers. There are a dozen kinds of pizza to work with, from veggie to hawaiian to meat lover\'s, and each player decides if they want to eat or keep some of the slices, building the best collection of pizzas possible! ', 'https://boardgamegeek.com/boardgame/208895/new-york-slice'),

  new Game('Scythe', 1, 5, 90, 120, 'true', 5, 'https://cf.geekdo-images.com/gLHDC5bCrxd1JhefjJ-VxW2zC54=/fit-in/246x300/pic3163924.jpg', 'Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a character from one of five factions of Eastern Europe who are attempting to earn their fortune and claim their faction\'s stake in the land around the mysterious Factory. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs.', 'https://boardgamegeek.com/boardgame/169786/scythe'),

  new Game('Ticket to Ride', 2, 5, 30, 60, true, 2, 'https://cf.geekdo-images.com/-7kWI_TKVJ9M3DLFdPTfky18324=/fit-in/246x300/pic38668.jpg', 'With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes, while providing players with intense strategic and tactical decisions every turn. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets – goal cards that connect distant cities; and to the player who builds the longest continuous route.', 'https://boardgamegeek.com/boardgame/9209/ticket-ride'),

  new Game('Santorini', 2, 4, 20, 20, 'false', 2, 'https://cf.geekdo-images.com/aGxcEgay9lJY29JXC4WoHMK-eC8=/fit-in/246x300/pic3283110.png', 'Santorini is an accessible strategy game, simple enough for an elementary school classroom while aiming to provide gameplay depth and content for hardcore gamers to explore, The rules are simple. Each turn consists of 2 steps: 1. Move - move one of your builders into a neighboring space. You may move your Builder Pawn on the same level, step-up one level, or step down any number of levels.  2. Build - Then construct a building level adjacent to the builder you moved. When building on top of the third level, place a dome instead, removing that space from play.  Winning the game - If either of your builders reaches the third level, you win.', 'https://boardgamegeek.com/boardgame/194655/santorini'),

  new Game('Fox in the forest', 2, 2, 30, 30, 'true', 2,  'https://cf.geekdo-images.com/VYu3d9_-pmgLdQbykJtp9RKsxZg=/fit-in/246x300/pic3496085.jpg', 'The Fox in the Forest is a trick-taking game for two players. Aside from the normal ranked- and suited-cards used to win tricks, fairy characters such as the Fox and the Witch have special abilities that let you change the trump suit, lead even after you lose a trick, and more', 'https://boardgamegeek.com/boardgame/221965/fox-forest'),

  new Game('Lost Cities', 2, 2, 15, 30, 'true', 2, 'https://cf.geekdo-images.com/A82gQjAqcVc4oHTYnIr22anCeWo=/fit-in/246x300/pic2606107.jpg', 'Lost Cities is a card game in the Kosmos two-player series. The game consists of a single deck of cards of rank 2–10 in 5 different colors with 3 special "handshakes" ("HS" in scoring examples below) in each suit. There is also a board which functions only to hold and organize discarded cards and is largely superfluous. Games last around 15 minutes. This is generally considered a good "couples" game and is often recommended for people with non-gamer partners.', 'https://boardgamegeek.com/boardgame/50/lost-cities'),

  new Game('Terra Mystica', [2, 3, 4, 5], 60, 150, 'false', 5, 'https://cf.geekdo-images.com/zm6mWUEYg2Yco_sJpjmN1DBZZv8=/fit-in/246x300/pic1356616.jpg', 'Terra Mystica is a game with very little luck that rewards strategic planning. Each player governs one of the 14 groups. With subtlety and craft, the player must attempt to rule as great an area as possible and to develop that group\'s skills. There are also four religious cults in which you can progress. To do all that, each group has special skills and abilities.', 'https://boardgamegeek.com/boardgame/120677/terra-mystica'),

  new Game('Hanabi', 2, 5, 20, 30, 'true', 2, 'https://cf.geekdo-images.com/yYJCFlLQbtdtZ_0Ke0xteequCMw=/fit-in/246x300/pic2007286.jpg', 'Hanabi—named for the Japanese word for "fireworks"—is a cooperative game in which players try to create the perfect fireworks show by placing the cards on the table in the right order. (In Japanese, hanabi is written as 花火; these are the ideograms flower and fire, respectively.)', 'https://boardgamegeek.com/boardgame/98778/hanabi'),

  new Game('Junk Art', 2, 6, 25, 35, 'true', 1, 'https://cf.geekdo-images.com/OfbWSoonAoMyth8ySZcD2jH3pSs=/fit-in/246x300/pic2884509.jpg', 'Junk Art contains more than ten game modes, along with more than sixty big colorful wooden or plastic components. In one version of the game, players pile all of the wooden or plastic parts in the center of the table, then are dealt a number of cards, with each card depicting one of these parts. On a turn, a player presents their left-hand neighbor with two cards from their hand. This neighbor takes one card in hand, then takes the part shown on the other card and places it on their base or on other parts that they\'ve already placed. If something falls, it stays on the table and the player continues to build on whatever still stands. Once players have finished playing cards, whoever has the tallest work of art wins.', 'https://boardgamegeek.com/boardgame/193042/junk-art'),

  new Game('Carcassonne', 2, 5, 30, 45, 'true', 2, 'https://cf.geekdo-images.com/IH6ugGHtABoMshU9IpZjruk_cds=/fit-in/246x300/pic2337577.jpg', 'Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of his meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner.', 'https://boardgamegeek.com/boardgame/822/carcassonne'),

  new Game('Imhotep', 2, 4, 30, 45, 'true', 2, 'https://cf.geekdo-images.com/_Lj_7nHp95UnqyzM1WmU-xFuOVI=/fit-in/246x300/pic3029488.jpg', 'In Imhotep, the players become builders in Egypt who want to emulate the first and best-known architect there, namely Imhotep.  Over six rounds, they move wooden stones by boat to create five seminal monuments, and on a turn, a player chooses one of four actions: Procure new stones, load stones on a boat, bring a boat to a monument, or play an action card. While this sounds easy, naturally the other players constantly thwart your building plans by carrying out plans of their own. Only those with the best timing — and the stones to back up their plans — will prove to be Egypt\'s best builder.', 'https://boardgamegeek.com/boardgame/191862/imhotep'),

  new Game('Forbidden Island', 2, 4, 25, 35, 'true', 2, 'https://cf.geekdo-images.com/gZdBSpXLStMXF5s54qwZ5-5sIuY=/fit-in/246x300/pic646458.jpg', 'Forbidden Island is a visually stunning cooperative board game. Instead of winning by competing with other players like most games, everyone must work together to win the game. Players take turns moving their pawns around the \'island\', which is built by arranging the many beautifully screen-printed tiles before play begins. As the game progresses, more and more island tiles sink, becoming unavailable, and the pace increases. Players use strategies to keep the island from sinking, while trying to collect treasures and items. As the water level rises, it gets more difficult- sacrifices must be made.', 'https://boardgamegeek.com/boardgame/65244/forbidden-island'),

  new Game('Kingdomino', 2, 4, 15, 20, 'false', 1, 'https://cf.geekdo-images.com/D3DLTVXuNzL8n2p9BT_2alSfbZs=/fit-in/246x300/pic3132685.png', 'Dominoes with a kingdom building twist. Each turn, connect a new domino to your existing kingdom, making sure at least one of its sides connects to a matching terrain type already in play. The game mechanics for obtaining the tiles is clever: the order of who picks first depends on which tile was previously chosen. Make sure to secure tiles with crowns- these royal treasures help to multiply the worth of your kingdom at the end of the game! The game ends when each player has completed a 5x5 grid, and then points are counted based on number of connecting tiles and crowns.', 'https://boardgamegeek.com/boardgame/204583/kingdomino'),

  new Game('Puerto Rico', 2, 5, 60, 90, 'false', 3, 'https://cf.geekdo-images.com/ERdhn-fY5ScWqU1wdYDzEP9LzvM=/fit-in/246x300/pic158548.jpg', 'In Puerto Rico players assume the roles of colonial governors on the island of Puerto Rico. The aim of the game is to amass victory points by shipping goods to Europe or by constructing buildings.', 'https://boardgamegeek.com/boardgame/3076/puerto-rico'),

  new Game('Dominion', 2, 5, 15, 30, 'false', 3, 'https://cf.geekdo-images.com/7mkW_JrUx0PSa4Ame3zzsLE0BVY=/fit-in/246x300/pic394356.jpg', '"You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion! In all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner.', 'https://boardgamegeek.com/boardgame/36218/dominion'),

  new Game('Pandemic', 2, 4, 30, 60, 'true', 2, 'https://cf.geekdo-images.com/cTrAWasNHyKMcNs8Zrv5O7sKS6M=/fit-in/246x300/pic1534148.jpg', 'The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are Epidemic! cards that accelerate and intensify the diseases\' activity. A second, separate deck of cards controls the "normal" spread of the infections.', 'https://boardgamegeek.com/boardgame/30549/pandemic'),

  new Game('Flip Ships', 1, 4, 30, 45, 'true', 1, 'https://cf.geekdo-images.com/aiHwOKTlifceQCG31genNLlXapw=/fit-in/246x300/pic3489147.jpg', 'Flip Ships is a cooperative dexterity game in which players take on the roles of brave pilots defending their planet from an onslaught of firepower. Flip your ships to take out the encroaching enemies and to take down the powerful mother ship before it\'s too late.', 'https://boardgamegeek.com/boardgame/223215/flip-ships'),

  new Game('Codenames', 2, 6, 15, 25, 'false', 2, 'https://cf.geekdo-images.com/j3KnNONTvPaOqyY_pwhS9C9s5bk=/fit-in/246x300/pic2582929.jpg', 'In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.', 'https://boardgamegeek.com/boardgame/178900/codenames'),

  new Game('Clank!', 1, 4, 30, 60, 'true', 2, 'https://cf.geekdo-images.com/gijX25CB7c0r9OlM0w7nbMvGHSI=/fit-in/246x300/pic3056966.jpg', 'Burgle your way to adventure in the deck-building board game Clank! Sneak into an angry dragon\'s mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow.  Be quick and be quiet. One false step and CLANK! Each careless sound draws the attention of the dragon, and each artifact stolen increases its rage. You can enjoy your plunder only if you make it out of the depths alive!', 'https://boardgamegeek.com/boardgame/201808/clank-deck-building-adventure'),

  new Game('Roll Through the Ages', 1, 4, 30, 45, 'false', 2, 'https://cf.geekdo-images.com/qdbZEoddKBcj5GRpJkyILQeFMvw=/fit-in/246x300/pic986758.jpg', 'In Roll Through the Ages, players roll dice to obtain commodities and workers to build up their civilizations. Dice can be rerolled twice unless they come up as a hazard. Players use their workers to build infrastructure to support additional works or to build monuments that are worth points. At the same time, commodities are gathered that allow your civilization to develop. Once all monuments or five developments are achieved by a player, the game ends at the end of the round, points are counted, and a victor is declared.', 'https://boardgamegeek.com/boardgame/37380/roll-through-ages-bronze-age'),

  new Game('King of Tokyo', 2, 6, 30, 40, 'true', 2, 'https://cf.geekdo-images.com/wOXROwYuEDNoDY6LhhUPGETrSnM=/fit-in/246x300/pic3043734.jpg', 'In King of Tokyo, you play mutant monsters, gigantic robots, and strange aliens—all of whom are destroying Tokyo and whacking each other in order to become the one and only King of Tokyo.  At the start of each turn, you roll six dice, which show the following six symbols: 1, 2, or 3 Victory Points, Energy, Heal, and Attack. Over three successive throws, choose whether to keep or discard each die in order to win victory points, gain energy, restore health, or attack other players into understanding that Tokyo is YOUR territory.', 'https://boardgamegeek.com/boardgame/70323/king-tokyo'),

  new Game('Ra', 2, 5, 45, 60, 'false', 2, 'https://cf.geekdo-images.com/wjxi5Wn5-VAhU1V9ovFsMRBqkeY=/fit-in/246x300/pic3013552.jpg', 'Ra is an auction and set-collection game with an Ancient Egyptian theme. Each turn players are able to purchase lots of tiles with their bidding tiles (suns). Once a player has used up his or her suns, the other players continue until they do likewise, which may set up a situation with a single uncontested player bidding on tiles before the end of the round occurs. Tension builds because the round may end before all players have had a chance to win their three lots for the epoch. The various tiles either give immediate points, prevent negative points for not having certain types at the end of the round (epoch), or give points after the final round. The game lasts for three "epochs" (rounds). The game offers a short learning curve, and experienced players find it both fast-moving and a quick play. ', 'https://boardgamegeek.com/boardgame/12/ra')
];

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

