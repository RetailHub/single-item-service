/* eslint-disable class-methods-use-this */

const dataSources = require('./csvdata.js');

class DataGenerator {
  constructor() {
    this.altImages = dataSources.altImages;
  }

  getRandomInt(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }

  generateImageArray() {
    const indexArr = [];
    const result = [];

    const randomLength = this.getRandomInt(1, 5);

    for (let i = 0; i < randomLength; i += 1) {
      indexArr.push(this.getRandomInt(i, 20));
    }

    indexArr.forEach((index) => {
      result.push(this.altImages[index]);
    });

    return result;
  }
}

module.exports = DataGenerator;
