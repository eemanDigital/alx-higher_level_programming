#!/usr/bin/node

const request = require('request');
const URL = process.argv[2];

request(URL, function (error, res, body) {
  if (error) {
    console.log(error);
  } else if (res.statusCode === 200) {
    const obj = JSON.parse(body).results;
    let n = 0;
    for (const film in obj) {
      const chars = obj[film].characters;
      for (const charIndex in chars) {
        if (chars[charIndex].includes('18')) {
          n++;
        }
      }
    }
    console.log(n);
  } else {
    console.log(`An error occured. Status code: ${res.statusCode}`);
  }
});
