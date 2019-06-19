//business logic for pig dice game
function PigDicePlayer() {
  this.player = [];
}

PigDicePlayer.prototype.addPlayer = function () {
  this.player.push(player);
};

//business logic for pig dice game
function player() {
  this.userName = userName,
  this.totalScore = totalScore,
  this.dice = dice,
  this.currentTurnScore = currentTurnScore;
}

//user logic
$(document).ready(function () {
  $('form#name-entry').submit(function (event) {
    event.preventDefault();
    var playerOneNameInput = $('#user-input').val();
    console.log(playerOneNameInput);
  });
});
