//business logic for pig dice game
function PigDicePlayer() {
  this.player = [];
}

PigDicePlayer.prototype.addPlayer = function () {
  this.player.push(Player);
};

//business logic for pig dice game
function Player(userName, totalScore, diceFace, currentTurnScore) {
  this.userName = userName,
  this.totalScore = totalScore,
  this.diceFace = diceFace,
  this.currentTurnScore = currentTurnScore;
}

//user logic
var pigDicePlayerForList = new PigDicePlayer();

$(document).ready(function () {
  $('form#name-entry').submit(function (event) {
    event.preventDefault();
    var playerOneNameInput = $('#new-user').val();
    console.log(playerOneNameInput);
    var totalScore = [];
    var diceFace = [];
    var currentScore = [];

    var newPlayer = new Player(playerOneNameInput, totalScore, diceFace, currentScore);
    console.log(newPlayer);
    pigDicePlayerForList.addPlayer(newPlayer);
  });
});
