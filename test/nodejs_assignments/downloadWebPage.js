const downloadCallback = require('../../src/nodejs_assignments/downloadWebPage.js');
const downloadStream = require('../../src/nodejs_assignments/downloadWebStreams.js');

console.log('Starting callback download...');
downloadCallback();

console.log('Starting streaming download...');
downloadStream();