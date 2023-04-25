#!/usr/bin/node

const request = require('request');
const movieID = process.argv[2];
const URL = 'https://swapi-api.alx-tools.com/api/films/';

request(URL + movieID, function (error, res, body) {
  if (error) {
    console.log(error);
  } else if (res.statusCode === 200) {
    const obj = JSON.parse(body);
    console.log(`${obj.title}`);
  } else {
    console.log(`Error code: ${res.statusCode}`);
  }
});
