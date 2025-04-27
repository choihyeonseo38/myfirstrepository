const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err,rows){
        console.log(rows);
    })
    
    response.writeHead(200, {'Content-type': 'text/html'}); // 응답 헤더 설정
    response.write('main page'); // 응답 바디
    response.end(); // 응답 종료
}

function login(response) {
    console.log('login');
    
    response.writeHead(200, {'Content-type': 'text/html'}); // 응답 헤더 설정
    response.write('login page'); // 응답 바디
    response.end(); // 응답 종료
}

let handle = {}; // key:value
handle['/'] = main; // '/' 경로에 main 함수 연결
handle['/login'] = login; // '/login' 경로에 login 함수 연결

exports.handle = handle; // handle 객체를 내보냄
