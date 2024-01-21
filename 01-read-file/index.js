const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');

async function readTextFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readTextFile();
