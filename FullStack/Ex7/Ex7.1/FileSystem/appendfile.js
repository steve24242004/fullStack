const fs = require('fs');

const newContent = '\nThis is a new line that appended to sample.txt file.';

fs.appendFile('sample.txt', newContent, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended successfully.');
});
