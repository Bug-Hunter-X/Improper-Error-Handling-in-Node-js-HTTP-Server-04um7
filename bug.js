const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Some code that might throw an error
    const result = someFunctionThatMightThrow();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    // Missing proper response to the client
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrow(){
  throw new Error('Something went wrong!');
}