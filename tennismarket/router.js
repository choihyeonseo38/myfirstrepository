function route(pathname, handle, response, productId) {
    if (typeof handle[pathname] === "function") {
      handle[pathname](response, productId); //  존재하는 경우 정상 실행
    } else {
      console.log("❌ No handler found for " + pathname);
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("찾으시는 페이지가 없습니다.");
      response.end();
    }
  }
  exports.route = route;