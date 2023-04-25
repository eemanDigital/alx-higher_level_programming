#!/usr/bin/node

const fileSys = require('fs');
const myFile = process.argv[2];
const myText = process.argv[3];

fileSys.writeFile(myFile, myText, 'utf-8', function (error) {
  if (error) console.log(error);
});
