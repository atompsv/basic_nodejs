const fs = require('fs'); // require the fs module

// create file
fs.writeFile('test.js', 'Hello', (err) => {
    if (err) throw err;
    console.log('File created');
});

// // read file
fs.readFile('test.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// append file
fs.appendFile('test.txt', '\t\tWellcome', (err) => {
  if (err) throw err;
  console.log('File appended');
});


// delete file
fs.unlink('test.js', (err) => {
  if (err) throw err;
  console.log('File deleted');
});