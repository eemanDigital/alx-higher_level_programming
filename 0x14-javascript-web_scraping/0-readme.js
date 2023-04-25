#!/usr/bin/node

const fs = require('fs');
const f = process.argv[2];

fs.readFile(f, 'utf-8', function (error, data) {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});
