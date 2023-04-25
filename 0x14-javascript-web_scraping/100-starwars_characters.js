#!/usr/bin/node

const request = require('request');
const movieID = process.argv[2];
const URL = 'https://swapi-api.hbtn.io/api/films/';
request.get(URL + movieID, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const output = JSON.parse(body);
  const chars = output.characters;
  for (const i of chars) {
    request.get(i, function (error, res, content)
      if (error) {
        console.log(error);
      }
      const data = JSON.parse(content);
      console.log(data.name);
    });
  }
});
