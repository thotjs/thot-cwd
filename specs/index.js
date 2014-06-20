'use strict';

require('../index');
var path = require('path');

if(process.cwd() !== path.dirname(module.filename)){
  throw new Error('Changing directory didn\'t work');
}