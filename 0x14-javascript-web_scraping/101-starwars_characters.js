#!/usr/bin/node
const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/ ${process.argv[2]}`;
request(url, function (error, response, body) {
  if (!error) {
    const chars = JSON.parse(body).characters;
    displayChars(chars, 0);
  }
});

function displayChars (chars, i) {
  request(chars[i], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (i + 1 < chars.length) {
        displayChars(chars, i + 1);
      }
    }
  });
}
