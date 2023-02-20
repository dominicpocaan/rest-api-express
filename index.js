'use strict';

require('dotenv').config();

const { 2: command, ...args } = process.argv;

const { App } = require('./src/server');

App.start(command);
