'use strict';

var button = document.getElementById('btn');
var form = document.getElementById('input-form');

var gameArray = [];

function GameGenerator(gameName, numOfPlayer, minTime, lookOfGame, difficultyLvl, maxTime) { // object construtor
  this.gameName = gameName;
  this.numOfPlayer = numOfPlayer;
  this.minTime = minTime;
  this.lookOfGame = lookOfGame;
  this.difficultyLvl = difficultyLvl;
  this.maxTime = maxTime;
};


button.addEventListener('click', getFromInfo);


function getFromInfo(event) {
  event.preventDefault();
  console.log('radio button test', event.target.form.elements[3].checked, event.target.form.elements[4].checked);
  console.log(event);

  var gameName = event.target.form.elements[0].value;
  var numOfPlayer = event.target.form.elements[1].value;
  var minTime = event.target.form.elements[2].value;
  var lookOfGame = event.target.form.elements[3].value;
  var difficultyLvl = event.target.form.elements[4].value;
  var maxTime = event.target.form.elements[5].value;

  gameArray.push(new GameGenerator(gameName, numOfPlayer, minTime, lookOfGame, difficultyLvl, maxTime));
  form.reset();
};

console.log('test gamearray:', gameArray);
