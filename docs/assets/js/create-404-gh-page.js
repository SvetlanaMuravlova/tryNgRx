'use strict';

const fs = require('fs-extra');
fs.copyFileSync('./docs/index.html', './docs/404.html');
