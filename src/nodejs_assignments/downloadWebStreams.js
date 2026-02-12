const fs = require('fs');
const path = require('path');
const request = require('request');

const GOOGLE_URL = 'https://www.google.com';
const FILE_PATH = path.join(__dirname, '../resources/google_stream.html');

function downloadStream() {
    const fileStream = fs.createWriteStream(FILE_PATH);

    request(GOOGLE_URL)
    .on('response', (response) => {
        console.log(`Download started. Status: ${response.statusCode}`);
    })
    .on('error', (err) => {
        console.error('Request Error:', err);
    })
    .pipe(fileStream)
    .on('finish', () => {
        console.log(`Download finished! File saved at: ${FILE_PATH}`);
    })
    .on('error', (err) => {
        console.error('File Write Error:', err);
    });
}

module.exports = downloadStream;