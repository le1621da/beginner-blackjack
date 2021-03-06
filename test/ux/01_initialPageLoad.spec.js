// set up the test runner
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
//chai.should();

// set-up selenium
const webdriver = require("selenium-webdriver");
const until = webdriver.until;
const promise = webdriver.promise;
const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .build();

// import Selenium helpers
const SeleniumWebdriverInteractions = require("../helper/seleniumWebdriverInteractions.js");
const perform = new SeleniumWebdriverInteractions(driver, until, promise);
const {getScores, getState01, getState02, getState03, getState04, getState05, checkArrayValuesAreAllTrue} = require("../helper/seleniumBlackjackFunctions");

// Initialise game variables
const LANDING_PAGE = "file:///Users/Lee/workspace/beginner-blackjack/index.html";
var state01;
var state02;
var state03;
var state04;
var state05;
var gameScores;

// Set game variables
async function setGameStateVariables() {
  state01 = await getState01(driver);
  state02 = await getState02(driver);
  state03 = await getState03(driver);
  state04 = await getState04(driver);
  state05 = await getState05(driver);
  gameScores = await getScores(driver);
  playersScore = parseInt(gameScores[0], 10);
  result = "";
}

  describe("TC101: VERIFY THE STATE OF THE PAGE WHEN IT'S INITIALLY LOADED", function(){

    before(function(){
      return perform.loadPage(LANDING_PAGE);
    })
  
    after(function(){
      driver.quit();    
    })

    describe("01: Fetch results...", function() {
      it("Update local variables...", async() => {
        await setGameStateVariables();
      })
    })

    describe("02: Check the state of the home page", function(){
      it("The page is in State 1", function(){checkArrayValuesAreAllTrue(state01).should.be.true;})
      it("The page is NOT in State 2", function(){checkArrayValuesAreAllTrue(state02).should.be.false;})
      it("The page is NOT in State 3", function(){checkArrayValuesAreAllTrue(state03).should.be.false;})
      it("The page is NOT in State 4", function(){checkArrayValuesAreAllTrue(state04).should.be.false;})
      it("The page is NOT in State 5", function(){checkArrayValuesAreAllTrue(state05).should.be.false;})
    })

  })
