//business logic for pig dice game
function PigDicePlayer() {
  this.player = [];
}

PigDicePlayer.prototype.addPlayer = function (Player) {
  this.player.push(Player);
};

function rollingDice() {
  return Math.floor(Math.random() * ((6 - 1) + 1) + 1);
}

//business logic for pig dice game
function Player(userName, totalScore, diceFace, currentScore) {
  this.userName = userName;
  this.totalScore = totalScore;
  this.diceFace = diceFace;
  this.currentScore = 0;
}

//user logic
var pigDicePlayerForList = new PigDicePlayer();

$(document).ready(function () {
  $('form#name-entry1').submit(function (event) {
    event.preventDefault();
    var playerOneNameInput = $('#new-user1').val();
    console.log(playerOneNameInput);
    var totalScore = [];
    var diceFace = [];
    var currentScore = [];

    //this creating a new player with the new Player constructor
    var newPlayer = new Player(playerOneNameInput, totalScore, diceFace, currentScore);

    //this calls the prototype to push new player into  player array
    pigDicePlayerForList.addPlayer(newPlayer);
    //This hides the form after name submission
    $('#name-entry1').hide();
    //This shows player interface
    $('#show-score1').show();
    $('#name-entry2').show();

  });

  $('form#name-entry2').submit(function (event) {
    event.preventDefault();
    var playerTwoNameInput = $('#new-user2').val();
    console.log(playerTwoNameInput);

    var totalScore = [];
    var diceFace = [];
    var currentScore = [];

    //this creating a new player with the new Player constructor
    var newPlayer = new Player(playerTwoNameInput, totalScore, diceFace, currentScore);

    //this calls the prototype to push new player into  player array
    pigDicePlayerForList.addPlayer(newPlayer);
    //This hides the form after name submission
    $('#name-entry2').hide();
    //This shows player interface
    $('#show-score2').show();
  });


  $('#roll1').click(function (event) {
    event.preventDefault();
    var currentRoll = rollingDice();
    $('#current-dice1').text(currentRoll);
    pigDicePlayerForList.player[0].currentScore += currentRoll
    $('#current-turn-score1').text(pigDicePlayerForList.player[0].currentScore);
  });

  $('#roll2').click(function (event) {
    event.preventDefault();
    var currentRoll = rollingDice();
    $('#current-dice2').text(currentRoll);
    pigDicePlayerForList.player[1].currentScore += currentRoll
    $('#current-turn-score2').text(pigDicePlayerForList.player[1].currentScore);
  });
});
