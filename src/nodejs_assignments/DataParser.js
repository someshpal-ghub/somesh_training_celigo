const fs = require('fs');
const parse = require('xml-parser');
const { XMLParser } = require("fast-xml-parser");

class DataParser {
    
  parseFromFile = (filePath) => {
    const xmlData = this.getXmlData(filePath);
    return parse(xmlData);
  }

    getXmlData(filePath) {
        if (!filePath) {
            throw new Error('File path is required');
        }

        if (!fs.existsSync(filePath)) {
            throw new Error(`XML file not found: ${filePath}`);
        }

        const xmlData = fs.readFileSync(filePath, 'utf8');
        return xmlData;
    }

  parseXMLToJson(filePath) {
    const xmlData = this.getXmlData(filePath);
    const parser = new XMLParser({
        ignoreDeclaration: true
    });

    return parser.parse(xmlData);
  }
}

module.exports = DataParser;