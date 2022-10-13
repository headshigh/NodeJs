const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    setInterval(() => {
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
          console.log(`${i} ${j}`);
        }
      }
    }, 0);
    res.end("About Page");
  }
  res.end("error page");
});
server.listen(5000);
