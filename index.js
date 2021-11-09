const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is te Overview");
  } else if (pathName === "/product") res.end("This is the product page");
  else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h2>Error 404 page not found<h2>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listening to the port no 3000");
});
