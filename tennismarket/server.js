let http = require("http");
const fs = require("fs");
const path = require("path");

function start(route, handle) {
  function onRequest(request, response) {
    const myUrl = new URL(request.url, "http://localhost:8888");
    const query = Object.fromEntries(myUrl.searchParams);

    let pathname = myUrl.pathname;

    const url = request.url;

    //  CSS 파일 요청 처리
    if (url === "/main.css") {
      const cssPath = path.join(__dirname, "main.css");
      fs.readFile(cssPath, "utf8", (err, data) => {
        if (err) {
          response.writeHead(404, { "Content-Type": "text/plain" });
          response.write("404 Not Found");
        } else {
          response.writeHead(200, { "Content-Type": "text/css" });
          response.write(data);
        }
        response.end();
      });
      return;
    }

    //  이미지 파일 제공
    if (url.startsWith("/img/")) {
      const imgPath = path.join(__dirname, url);
      fs.readFile(imgPath, (err, data) => {
        if (err) {
          response.writeHead(404, { "Content-Type": "text/plain" });
          response.write("404 Not Found");
        } else {
          response.writeHead(200, { "Content-Type": "image/png" }); // 이미지 파일 MIME 설정
          response.write(data);
        }
        response.end();
      });
      return;
    }

    route(pathname, handle, response, query.productId);
    // response.writeHead(200, { "Content-Type": "text/html" });
    // response.write("seokwoo kim");
    // response.end();
  }
  http.createServer(onRequest).listen(8888);
}

exports.start = start;