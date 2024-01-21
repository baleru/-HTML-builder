const fs = require('fs');
const path = require('path');

const secretFolderPath = '03-files-in-folder/secret-folder';

fs.readdir(secretFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading the secret folder:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(secretFolderPath, file);

    fs.stat(filePath, (statErr, stats) => {
      if (statErr) {
        console.error(`Error getting file stats for ${file}:`, statErr);
        return;
      }

      if (stats.isFile()) {
        const fileName = path.basename(file, path.extname(file));
        const fileExtension = path.extname(file).slice(1);
        const fileSize = stats.size;

        console.log(`${fileName} - ${fileExtension} - ${fileSize} bytes`);
      } else {
        console.error(`Error: ${file} is not a file.`);
      }
    });
  });
});
