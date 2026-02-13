const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");
const { readImageUrls } = require("./downloadImagesFromFile.js");

const SHORT_MAPPING_DIR = path.join(__dirname, "../resources");
const CSV_FILE = path.join(SHORT_MAPPING_DIR, "shortenedUrl.csv");
const BASE_SHORT_URL = "https://short.ly/";

const urlMap = new Map();

function generateShortUrl(originalUrl) {
  if (urlMap.has(originalUrl)) {
    return urlMap.get(originalUrl);
  }

  const shortUrl = BASE_SHORT_URL + nanoid(7);
  urlMap.set(originalUrl, shortUrl);
  return shortUrl;
}

async function shortenUrl() {
  try {
    const urls = readImageUrls();

    let csvData = "original_url,short_url\n";

    urls.forEach((url) => {
      const shortUrl = generateShortUrl(url);
      csvData += `${url},${shortUrl}\n`;
    });

    fs.writeFileSync(CSV_FILE, csvData);
    console.log("CSV created successfully");
  } catch (err) {
    console.error("Error occurred:", err.message);
  }
}

module.exports = shortenUrl;