const fs = require("fs");
const path = require("path");
const axios = require("axios");
const AdmZip = require("adm-zip");

const INPUT_IMAGE_FILE = path.join(__dirname, "../resources/imageUrl.txt");
const DOWNLOAD_DIR = path.join(__dirname, "../resources");
const ZIP_FILE = path.join(DOWNLOAD_DIR, "images.zip");

function readImageUrls() {
  try {
    console.log(__dirname);
    const fileContent = fs.readFileSync(INPUT_IMAGE_FILE, "utf-8");
    return fileContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  } catch (err) {
    console.error("Error reading input file:", err.message);
  }
}

async function downloadImage(url, index) {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000,
    });

    const urlPath = new URL(url).pathname;
    const ext = path.extname(urlPath) || ".jpg";
    const filename = `image_${index}${ext}`;

    return {
      filename: filename,
      data: response.data,
      index: index,
    };
  } catch (error) {
    console.error(`Failed at index ${index}`);
    return null;
  }
}

async function downloadAllImages(urls) {
  const downloadPromises = urls.map((url, index) => {
    return downloadImage(url, index);
  });

  const results = await Promise.all(downloadPromises);
  return results.filter((item) => item !== null);
}

async function saveImagesToZip() {
  try {
    const urls = readImageUrls();
    console.log(urls);
    const images = await downloadAllImages(urls);

    const zip = new AdmZip();
    images.forEach(({ index, filename, data }) => {
      console.log(`Adding ${filename} at index ${index} to ZIP file`);
      zip.addFile(filename, data);
    });

    zip.writeZip(ZIP_FILE);
  } catch (error) {
    console.error("Error occured while saving ZIP:", error.message);
  }
}

module.exports = {
  readImageUrls,
  saveImagesToZip,
};
