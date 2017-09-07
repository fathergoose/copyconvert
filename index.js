#!/bin/env node

const fs = require('fs');

const args = process.argv;

fs.readdir(args[2], (err, data) => {
  if (err) {
    console.error(err);
  }
  data.forEach(file => {
    console.log(file);
    if (file.isDirectory()) {
      readdir(file, (twoErr, twoFiles) => {
        console.log(twoFiles);
      });
    }
  });
});
