const dataSources = require('./csvdata.js');

class dataGenerator {
  constructor() {
    this.altImages = dataSources.altImages;
  }
}

module.exports = dataGenerator;
