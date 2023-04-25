#!/usr/bin/node

const request = require('request');
const URL = process.argv[2];

request(URL, function (error, res) {
  if (error) {
    console.log(error);
  } else {
    console.log('code: ' + res.statusCode);
  }
});
