const DataParser = require('./DataParser');
const path = require('path');
const XML_PATH = path.join(__dirname, '../resources/testParse.xml');

const parser = new DataParser();

try {
  const xmlResult = parser.parseFromFile(XML_PATH);
  console.log('Parsed XML object is:', xmlResult);

  const json = parser.parseXMLToJson(XML_PATH);
  console.log('Parsed JSON object is:', JSON.stringify(json, null, 2));
} catch (error) {
  console.error('Error:', error.message || error);
}