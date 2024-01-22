const fs = require('fs');
const path = require('path');
const stylesDir = './styles';
const outputDir = './project-dist';
const outputFile = 'bundle.css';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

let stylesArray = [];

fs.readdir(stylesDir, (err, files) => {
  if (err) throw err;

  let cssFiles = files.filter((file) => path.extname(file) === '.css');

  cssFiles.forEach((file) => {
    let styles = fs.readFileSync(path.join(stylesDir, file), 'utf8');
    stylesArray.push(styles);
  });

  fs.writeFileSync(
    path.join(outputDir, outputFile),
    stylesArray.join('\n'),
    'utf8',
  );
});
