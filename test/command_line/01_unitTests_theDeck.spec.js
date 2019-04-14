// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, getScore, checkScores} = require("../../includes/scripts/helper/blackjackFunctions.js");

  
  describe("The deck", function(){

    describe("A new deck", function(){

      let deck = buildADeckOfCards();
      it("A new deck has 52 cards", function(){deck.length.should.equal(52);})
      it("The first card is a 2", function(){deck[0].should.have.property("rank").equals("Two");})
      it("The first card is a Spade", function(){deck[0].should.have.property("suit").equals("Spades");})
      it("The first card is worth 2 points", function(){deck[0].should.have.property("value").equals(2);})
      it("The 15th card is a 3", function(){deck[14].should.have.property("rank").equals("Three");})
      it("The 15th card is a Club", function(){deck[14].should.have.property("suit").equals("Clubs");})
      it("The 29th card is a 4", function(){deck[28].should.have.property("rank").equals("Four");})
      it("The 29th card is a Diamond", function(){deck[28].should.have.property("suit").equals("Diamonds");})
      it("The last card is an Ace", function(){deck[51].should.have.property("rank").equals("Ace");})
      it("The last card is a Heart", function(){deck[51].should.have.property("suit").equals("Hearts");})
      it("The last card is worth 1 point", function(){deck[51].should.have.property("value").equals(1);})

    })
    

    describe("A shuffled deck", function(){

      let deck = buildADeckOfCards();
      let shuffledDeck = shuffleADeckOfCards(deck);
      let newDeck = buildADeckOfCards();
      it("The original deck has 0 cards after being shuffled", function(){deck.length.should.equal(0);});
      it("The shuffled deck has 2 cards", function(){shuffledDeck.length.should.equal(52);}); 
      it("A shuffled deck != an unshuffled deck", function(){shuffledDeck.should.not.equal(newDeck);}); 

    })
    

    describe("Wrapping the build and shuffle functions", function(){

      let shuffledDeck = buildAndShuffleADeckOfCards();
      let freshDeck = buildADeckOfCards();

      it("A shuffled deck contains 52 cards", function(){shuffledDeck.length.should.equal(52);});
      it("A fresh deck contains 52 cards", function(){freshDeck.length.should.equal(52);});
      it("A shuffled deck != an unshuffled deck", function(){shuffledDeck.length.should.not.equal(freshDeck);});

    })
    
  })