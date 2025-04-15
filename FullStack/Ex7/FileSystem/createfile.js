const fs = require('fs');
const fileName = 'demo.txt';
const content = 'This is a Demo..';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log(`${fileName} created successfully.`);
});
