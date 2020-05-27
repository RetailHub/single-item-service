const faker = require('faker');

function generateRandomData(userContext, events, done) {
  const id = faker.random.number(10000000);
  const itemId = faker.random.number(11000000);
  const arrayLength = faker.random.number(1, 5);
  const altImages = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const imageIndex = faker.random.number(20);
    altImages.push(`'https://sdcimages.s3-us-west-1.amazonaws.com/img${imageIndex}.jpg'`);
  }

  userContext.vars.id = id;
  userContext.vars.itemId = itemId;
  userContext.vars.altImages = altImages;
  return done();
}

module.exports = {
  generateRandomData,
};
