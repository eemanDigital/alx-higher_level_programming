#!/usr/bin/node

const request = require('request');
const URL = process.argv[2];

request(URL, function (err, res, body) {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 200) {
    const completed = {};
    const todos = JSON.parse(body);
    for (const todo in todos) {
      const task = todos[todo];
      if (task.completed === true) {
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } else {
          completed[task.userId]++;
        }
      }
    }
    console.log(completed);
  } else {
    console.log('An error occured. Status code: ' + res.statusCode);
  }
});
