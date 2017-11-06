'use strict';
var whoGoesFirst = function () {
  var goFirst = ['Who just had a Birtday?', 'Who is the youngest?', 'Who is the oldest'];
  var randomFirst = goFirst[Math.floor(Math.random() * goFirst.length)];
  var goFirstBtn = document.getElementById('goFirstBtn');
  goFirstBtn (alert(randomFirst));
  whoGoesFirst ();
};
