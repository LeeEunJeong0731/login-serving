const http = require("http");
const fs = require("fs");
const url = require("url");
function serverErrorLog() {
  res.writeHead(500);
  return res.end("서버에 문제가 생겻습니다.");
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("./static/index.html", (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/css/style.css" && req.method === "GET") {
    fs.readFile("./static/css/style.css", "utf8", (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else if (
    req.method === "POST" &&
    parsedUrl.pathname === "/static/secindex.html"
  ) {
    fs.readFile("./static/secindex.html", "utf8", (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(
    `cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`
  );
});
