const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Welcome to our Homepage");
  if (req.url === "/") {
    res.end("welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to about");
  } else {
    res.end(`<h1>oops!</h1>

  <p>There's nothing Here</p>`);
  }
});
server.listen(5000);
