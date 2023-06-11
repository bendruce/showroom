const https = require('https');
const fs = require('fs');

let start = 1;
let end = 298;

for (let i = start; i <= end; i++) {
  let paddedNumber = i.toString().padStart(3, '0');
  let url = `https://amsc-prod-cd.azureedge.net/-/media/astonmartin_carousel_mp4_may_23/desktop/${paddedNumber}?rev=-1&hash=426BB7112F7517B2F9E4F980927A42BC`;

  https.get(url, (response) => {
    let fileName = `${i - start}.jpg`;
    let file = fs.createWriteStream(`images/${fileName}`);
    response.pipe(file);
  }).on('error', (error) => {
    console.error(`Got error: ${error.message}`);
  });
}
