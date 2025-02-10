const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    // Some code that might throw an error
    const result = someFunctionThatMightThrow();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    // Send a proper error response to the client
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrow(){
  throw new Error('Something went wrong!');
}