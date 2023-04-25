#!/usr/bin/node
const request = require('request');
const fileSys = require('fs');

request(process.argv[2], function (error, res, body) {
  if (!error) {
    fileSys.writeFileSync(process.argv[3], body);
  }
});
