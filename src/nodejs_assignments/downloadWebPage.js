const fs = require("fs");
const path = require("path");
const request = require("request");

const GOOGLE_URL = "https://www.google.com";
const FILE_PATH = path.join(__dirname, "../resources/google.html");

function downloadCallback() {
  request(GOOGLE_URL, (error, response, body) => {
    if (error) {
      console.error("Request Error:", error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(
        `Failed to fetch page. Status code: ${response.statusCode}`,
      );
      return;
    }

    fs.writeFile(FILE_PATH, body, (err) => {
      if (err) {
        console.error("File Write Error:", err);
      } else {
        console.log(`Webpage saved successfully at: ${FILE_PATH}`);
      }
    });
  });
}

module.exports = downloadCallback;
