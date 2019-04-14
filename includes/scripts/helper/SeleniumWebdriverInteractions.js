class SeleniumWebdriverInteractions {

  constructor(driver, until) {
    this.driver = driver;
    this.until = until;
  }
  
  loadPage(url) {
    this.driver.get(url);
  }
  
  waitForElement(elementId) {
    var myPromise = this.driver.wait(this.until.elementLocated({id: elementId}), 5000)
    .then(
      result => true,
      error => false
    )
    return myPromise;
  }

  canFindElement(elementId) {
    var myPromise = this.driver.findElement({id: elementId})
    .then(
      result => true,
      error => false
    )
    return myPromise;
  }

}

module.exports = SeleniumWebdriverInteractions;