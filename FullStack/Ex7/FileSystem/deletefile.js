// deleteAfterDelay.js
const fs = require('fs');

const filePath = 'demo.txt';

console.log(`File will be deleted after 10 seconds...`);

setTimeout(() => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log(`${filePath} deleted successfully.`);
    }
  });
}, 10000);
