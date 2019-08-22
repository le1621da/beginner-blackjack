//
// Blackjack
//

requirejs(["helper/blackjackFunctions"], function(blackjackFunctions) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

// DOM variables
let title = document.getElementById("page_title");
let welcomeText = document.getElementById("welcome_text");
let playersHeader = document.getElementById("players_header");
let playersHand = document.getElementById("players_hand");
let playersScore = document.getElementById("players_score");
let dealersHeader = document.getElementById("dealers_header");
let dealersHand = document.getElementById("dealers_hand");
let dealersScore = document.getElementById("dealers_score");
let resultsArea = document.getElementById("results_area");
let newGameButton = document.getElementById("new_game_button");
let dealButton = document.getElementById("deal_button");
let twistButton = document.getElementById("twist_button");
let stickButton = document.getElementById("stick_button");


  // Game variables
let isDebugMode = false,
    isGameStarted = false,
    isGameOver = false,
    hasPlayerWon = false,
    dealersCards = [],
    playersCards = [],
    dealerScore = 0,
    playerScore = 0,
    playersHandAndScoreString = "",
    dealersHandAndScoreString = "",
    deck = [];


// Start a new game... look out for a click and then execute the function
newGameButton.addEventListener("click", function(){
  console.log("DEBUG: newGameButton");

  if (isGameOver) {
    console.log("DEBUG: call resetGameVariables");
    resetGameVariables();
  } 
  
  // Set game variables
  isGameStarted = true;
  isGameOver = false;
  hasPlayerWon = false;
  
  // Amend the html
  console.log("DEBUG: call setNewGameState");
  setNewGameState();

  if (isDebugMode) debugVariables();
})


// Player triggers 'deal'
dealButton.addEventListener("click", function(){
  console.log("DEBUG: dealButton");

  // Amend the html
  console.log("DEBUG: call setInGameState");
  setInGameState();
  
  // Opening deal
  deck = buildAndShuffleADeckOfCards();
  deal(playersCards, deck);
  deal(playersCards, deck);
  deal(dealersCards, deck);
  
  // Update scores and output
  console.log("DEBUG: call checkGameStatus");
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  dealersHandAndScoreString = outputDealersScore();
  
  if (isDebugMode) debugVariables();
})


// Player adds cards
twistButton.addEventListener("click", function(){
  console.log("DEBUG: twistButton");
  deal(playersCards, deck);
  
  // Update results and output
  console.log("DEBUG: call checkGameStatus");
  checkGameStatus(false);
  playersHandAndScoreString = outputPlayersScore();
  outputDealersScore();

  if (isDebugMode) debugVariables();
})


// Dealer plays
stickButton.addEventListener("click", function(){  
  console.log("DEBUG: stickButton");

  var status = "";
  
  // Dealer plays until there's a winner...
  do  {
    deal(dealersCards, deck);
    status = checkGameStatus(true);
    outputDealersScore();
  }
  while (status === "Pending");

  if (isDebugMode) debugVariables();
  
})


function outputPlayersScore(){
  console.log("DEBUG: outputPlayersScore");

  playersHand.innerText = getHandString(playersCards);
  playersScore.innerText = "(Score " + playerScore + ")";

  if (isDebugMode) debugVariables();
}


function outputDealersScore(){dealersHand.innerText = getHandString(dealersCards);
  console.log("DEBUG: outputDealersScore");

  dealersScore.innerText = "(Score " + dealerScore + ")";

  if (isDebugMode) debugVariables();
}


function checkGameStatus(playerHasFinished){
  console.log("DEBUG: checkGameStatus");

  playerScore = getScore(playersCards);
  dealerScore = getScore(dealersCards);
  let status = checkScores(playerHasFinished, playerScore, dealerScore);

  console.log("DEBUG: playerScore = " + playerScore);
  console.log("DEBUG: dealerScore = " + dealerScore);
  console.log("DEBUG: statuswinner = " + status.winner);
  
  if (status.winner !== "Pending") {
    console.log("DEBUG: Status <> Pending");
    resultsArea.innerText = "WINNER: " + status.winner + ".  ";
    isGameOver = true;
  }
  
  if (isGameOver) {
    console.log("DEBUG: call setEndGameState");
    setEndGameState();
  }

  if (isDebugMode) debugVariables();
  return status.winner;
  
}


function setNewGameState(){
  console.log("DEBUG: setNewGameState");

  welcomeText.innerText = "";

  playersHeader.style.visibility = "hidden";
  playersHand.innerText = "";
  playersScore.innerText = "";

  dealersHeader.style.visibility = "hidden";
  dealersHand.innerText = "";
  dealersScore.innerText = "";

  newGameButton.style.visibility = "hidden";
  dealButton.style.visibility = "visible";
  
  resultsArea.innerText = "";

  if (isDebugMode) debugVariables();
}


function setInGameState() {
  console.log("DEBUG: setInGameState");

  playersHeader.style.visibility = "visible";
  dealersHeader.style.visibility = "visible";
  dealButton.style.visibility = "hidden";
  twistButton.style.visibility = "visible";
  stickButton.style.visibility = "visible";
  twistButton.style.display = "inline";
  twistButton.style.display = "inline";

  if (isDebugMode) debugVariables();
}


function setEndGameState() {
  console.log("DEBUG: setEndGameState");

  newGameButton.style.visibility = "visible";
  twistButton.style.visibility = "hidden";
  stickButton.style.visibility = "hidden";

  if (isDebugMode) debugVariables();
}


function resetGameVariables(){
    console.log("DEBUG: resetGameVariables");

    isGameStarted = false;
    isGameOver = false;
    hasPlayerWon = false;
    dealersCards = [];
    playersCards = [];
    dealerScore = 0;
    playerScore = 0;
    playersHandAndScoreString = "";
    deck = [];

    if (isDebugMode) debugVariables();
}


function debugVariables(){  
  console.log("isGameStarted = " + isGameStarted); 
  console.log("isGameOver = " + isGameOver); 
  console.log("hasPlayerWon = " + hasPlayerWon); 
  console.log("dealersCards = " + dealersCards); 
  console.log("playersCards = " +playersCards ); 
  console.log("dealerScore = " + dealerScore); 
  console.log("playerScore = " + playerScore); 
  console.log("playersHandAndScoreString = " + playersHandAndScoreString); 
  console.log("dealersHandAndScoreString = " + dealersHandAndScoreString); 
  console.log("deck = " + deck); 
}