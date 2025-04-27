let http = require('http'); /*http프로토콜을 사용할 수 있도록
 node.js가 미리 모듈을 만들어 온 후 require을 이용해 불러옴*/
 let url = require('url');
 
 function start(route, handle){
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;/*경로 확인*/
        route(pathname, handle, response);

     }
    
     http.createServer(onRequest).listen(8888); /*위에 함수를 미리 만들어주고 서버가 만들어 진 것임*/
 }
 exports.start = start;