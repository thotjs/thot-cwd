'use strict';

var path = require('path');

// grab the current working directory vs current file's directory
var current = process.cwd();
var desired = path.dirname(require.main.filename);

// change dir if not the same
if(current !== desired){
  try{
    process.chdir(desired);
  } catch (err) {
    console.log('Can\'t change the current working directory. Please ensure you have sufficient permissions for ' + desired);
    process.exit(1);
  }
}