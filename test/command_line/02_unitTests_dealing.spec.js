// set up the test runner
var chai = require("chai");
//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);
chai.should();

// import the functions
const {buildADeckOfCards, shuffleADeckOfCards, buildAndShuffleADeckOfCards, deal, getHandString, getScore, checkScores} = require("../../includes/scripts/helper/blackjackFunctions.js");

  
  describe("Dealing", function(){
    
    describe("Deal", function(){

      let playersHand = [];
      let dealersHand = [];
      let deck = buildADeckOfCards();   

      // Deal one
      let dealt = deal(playersHand, deck);
      remainingDeck = dealt.deckOfCards;

      it("A deck has 51 cards a card has been dealt", function(){remainingDeck.length.should.equal(51);})
      it("A player has a 2 after being dealt from an unshuffled deck", function(){playersHand[0].should.have.property("suit").equals("Spades");})
      it("A player has a Spade after being dealt from an unshuffled deck", function(){playersHand[0].should.have.property("rank").equals("Two");})
      it("A player's hand is worth 2 points after being dealt from an unshuffled deck", function(){playersHand[0].should.have.property("value").equals(2);})
      it("A player's hand is not empty after they've been dealt 1 card", function(){playersHand.should.not.be.empty;})
      it("The dealer's hand is empty after the the player has been dealt 1 ccard", function(){dealersHand.should.be.empty;})

    })

    describe("Stringify the player's Hand", function(){

      let hand = [{
        "suit": "Spades",
        "rank": "Two"
      },{
        "suit": "Diamonds",
        "rank": "Three"
      }]

      it("The player's hand is converted into a string for printing", function(){getHandString(hand).should.equal("Two of Spades\nThree of Diamonds\n")});

    })
    
  })

