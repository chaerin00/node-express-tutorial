const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>404</p>
  <a href='/'>home</a>
  `);
});

server.listen(3000);
