#!/usr/bin/env node

const fs = require('fs');
const recursive = require('recursive-readdir');
const path = require('path');

const args = process.argv;

recursive(path.resolve(args[2]))
  .then(data => {
    data.forEach(file => {
      console.log(file);
    });
  })
  .catch(err => {
    console.errror(err);
  });
