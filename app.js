const http = require("http");
const fs = require("fs");
const querystring = require("querystring"); //쿼리스트링 모듈 가져오기

const idpwcheck = require("./static/js/idpwcheck"); // id와pw 조건식 모듈 가져오기
const sub = require("./static/js/indexF"); //sub html 파일 모듈 가져오기
const singUpAsset = require("./static/js/singUpAsset");

const passwordcheck = require("./static/js/passwordcheck"); //password가 같은지 확인하는 모듈 가져오기

const emailCheck = require("./static/js/emaliCheck"); //email 확인 모듈가져오기

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
      const { username } = parseBody;

      Object.assign(singUpAsset, parseBody); // parseBody의 프로퍼티 키와 동일한 signUpAsset의 프로퍼티 키에 값을 대입

      // id, password, email 조건식

      //! if주석 미처리시 다음 페이지로 넘어 가지 않음
      if (
        // idpwcheck(singUpAsset.id) &&
        passwordcheck(singUpAsset.password, singUpAsset.password2) && // 다음페이지 넘어감
        emailCheck(singUpAsset.email)
      ) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(sub(username));
      }
    });
  }
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(
    `cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`
  );
});
