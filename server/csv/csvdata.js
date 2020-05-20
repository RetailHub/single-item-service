const arr = [];

for (let i = 0; i < 101; i += 1) {
  arr.push(`https://single-page-items.s3.us-east-2.amazonaws.com/img${i}.jpg`);
}

module.exports = {
  altImages: arr,
};
