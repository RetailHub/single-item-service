const arr = [];

for (let i = 0; i < 20; i += 1) {
  arr.push(`'https://sdcimages.s3-us-west-1.amazonaws.com/img${i}.jpg'`);
}

module.exports = {
  altImages: arr,
};
