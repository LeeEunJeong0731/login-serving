const sub = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">
          <form  method="get">
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

module.exports = indexF;
