const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  }
  if (req.url === "/about") {
    res.end("here is the about page");
  }
  res.end(
    ` <h1>Ooooooooops! ERROR!</h1> <p>We cant seem to find the page you're looking for</p> <a href= "/">back home </a>`
  );
});

server.listen(5000);
