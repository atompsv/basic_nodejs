const http = require('http');

http.createServer((req, res) => {
  // res.write("hello world");
  // res.end();

  if (req.url === '/root') {
    res.write('Hello Root');
    res.end();
  }

  // read request from body and send response
  if (req.url === '/api/courses') {
    var courses = [] 
    req.on('data', (chunk) => {
      courses.push(chunk);
    });

    req.on('end', () => {
      res.write(`You sent ${courses}`);
      res.end();
    });
  }

}).listen(8080), (err) => {
  if (err) throw err;
  console.log('Server is running on port 8080');
};
