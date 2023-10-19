const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring"); //쿼리스트링 모듈 가져오기

// const idAlpha = require("idAlpha"); // id 조건식 모듈 가져오기
// const pwAlphaNum = require("pwAlphanum"); //password 조건식 모듈 가져오기
const sub = require("./static/js/indexF"); //sub html 파일 모듈 가져오기
// const singUpAsset = require("singUpAsset");

// res.writeHead(200, { "content-Type": "text/html" });
// res.end(html.one + `${singUpAsset.id}` + html.two);
// 조건식이 참이면 읽을 데이터 subpage

function serverErrorLog() {
  res.writeHead(500);
  return res.end("서버에 문제가 생겼습니다.");
}

const server = http.createServer((req, res) => {
  // const parsedUrl = url.parse(req.url, true);
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
  } else if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // body = body + chunk.toString -> input에 입력된 데이터를 문자열로 body에 반환
    });

    req.on("end", () => {
      const parseBody = querystring.parse(body); // body 값을 parseBody라는 객체에 문자열로 대입
      const { username, password, password2, email } = parseBody;

      // Object.assign(signUpAsset, parseBody); // parseBody의 프로퍼티 키와 동일한 signUpAsset의 프로퍼티 키에 값을 대입
      // console.log(signUpAsset);
      // id, password, email 조건식

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(sub(username));
    });
  }
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(
    `cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`
  );
});
