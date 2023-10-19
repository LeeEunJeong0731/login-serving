const OneHTMl = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <div id="root">
      <form name="joinForm" action="/static/secindex.html" method="post">
        <div>
          <label>ID <input type="text" name="username" id="userId" /></label>
        </div>
        <div>
          <label
            >PW <input type="password" name="password" id="password"
          /></label>
        </div>
        <div>
          <label
            >PW <input type="password" name="password" id="repassword"
          /></label>
        </div>
        <div>
          <label>Email <input type="email" name="email" id="email" /></label>
        </div>
        <input
          type="submit"
          value="Sing Up"
          id="submit"
          onclick="submit_check()"
        />
      </form>
    </div>
    </body>
    </html>`;

const TwoHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">
          <form action="/" method="get">
            <div>
              <p>
                님 반갑습니다! <br />
                저에게 편지를 보내주세요
              </p>
            </div>
            <div>
              <label>Title</label>
              <input type="text" name="title" />
            </div>
            <div>
              <label>Text</label>
              <input type="text" name="Text" />
            </div>
            <div>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </body>
    </html>
    `;
