// set up the test runner
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
//chai.should();

// set-up selenium
const webdriver = require("selenium-webdriver");
const until = webdriver.until;
const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .build();

// import Selenium helpers
const SeleniumWebdriverInteractions = require("../../includes/scripts/helper/SeleniumWebdriverInteractions.js");
const perform = new SeleniumWebdriverInteractions(driver, until);

describe("Verifying the initial state of the home page", function(){
  before(function(){
    perform.loadPage("file:///Users/Lee/workspace/beginner-blackjack/index.html");
  })

  after(function(){
    driver.quit();
    
  })

  describe("Load the website", function(){
    this.timeout(6000);
    it("The page_title element has been located", function(){return perform.waitForElement("page_title").should.eventually.be.true;});
    it("The welcome_text element has been located",function(){return perform.canFindElement("welcome_text").should.eventually.be.true;});
    it("The players_header element has been located",function(){return perform.canFindElement("players_header").should.eventually.be.true;});
    it("The players_hand element has been located",function(){return perform.canFindElement("players_hand").should.eventually.be.true;});
    it("The players_score element has been located",function(){return perform.canFindElement("players_score").should.eventually.be.true;});
    it("The deal_button has been located",function(){return perform.canFindElement("deal_button").should.eventually.be.true;});
    it("The stay_button has been located",function(){return perform.canFindElement("stay_button").should.eventually.be.true;});
    it("The hit_button has been located",function(){return perform.canFindElement("hit_button").should.eventually.be.true;});
    it("The dealers_header element has been located",function(){return perform.canFindElement("hit_button").should.eventually.be.true;});
    it("The dealers_hand element has been located",function(){return perform.canFindElement("dealers_header").should.eventually.be.true;});
    it("The dealers_score element has been located",function(){return perform.canFindElement("dealers_score").should.eventually.be.true;});
    it("The results_area_element has been located",function(){return perform.canFindElement("results_area").should.eventually.be.true;});
    it("The new_game_button has been located",function(){return perform.canFindElement("new_game_button").should.eventually.be.true;});
    it("Negative test: 'negative test button has not been located",function(){return perform.canFindElement("negative_test_button").should.eventually.be.false;});
  })

})
  






