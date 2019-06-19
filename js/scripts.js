//business logic for pig dice game
function PigDicePlayer() {
  this.player = [];
}

PigDicePlayer.prototype.addPlayer = function (Player) {
  this.player.push(Player);
};

//business logic for pig dice game
function Player(userName, totalScore, diceFace, currentScore) {
  this.userName = userName;
  this.totalScore = totalScore;
  this.diceFace = diceFace;
  this.currentScore = currentScore;
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
});
