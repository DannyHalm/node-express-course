const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my page");
  }
  if (req.url === "/about") {
    res.end("Welcome to about page");
  }
  res.end(
    `
    <h1>The page you are looking fr does not exist</h1> 
    <a href='/'>Back Home</a>
   
   `
  );
});

server.listen(5000);
