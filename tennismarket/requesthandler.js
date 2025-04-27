const fs = require("fs");
const main_view = fs.readFileSync("./main.html", "utf-8");
const orderlist_view = fs.readFileSync("./orderList.html", "utf-8");
const mariadb = require("./database/connect/mariadb");

function main(response) {
  console.log("main");
  mariadb.query("SELECT * FROM product", function (err, rows) {
    return rows;
  });
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(main_view);
  response.end();
}
function login(response) {
  console.log("login");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("login Page");
  response.end();
}

function redRacket(response) {
  fs.readFile("./img/redRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function blueRacket(response) {
  fs.readFile("./img/blueRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function blackRacket(response) {
  fs.readFile("./img/blackRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function order(response, productId) {
  response.writeHead(200, { "Content-Type": "text/html" });

  mariadb.query(
    "INSERT INTO orderlist VALUES (" +
      productId +
      ", '" +
      new Date().toLocaleDateString() +
      "');",
    function (err, rows) {
      console.log(err, rows);
    }
  );

  response.write("orderPage 입니다.");
  response.end();
}

function orderlist(response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  mariadb.query("SELECT * FROM orderlist", function (err, rows) {
    response.write(orderlist_view);

    rows.forEach((element) => {
      response.write(
        "<tr>" +
          "<td>" +
          element.product_id +
          "</td>" +
          "<td>" +
          element.order_date +
          "</td>" +
          "</tr>"
      );
    });

    response.write("</table>");
    response.end();
  });
}

let handle = {};
handle["/"] = main;
handle["/order"] = order;
handle["/orderlist"] = orderlist;

handle["./img/redRacket.png"] = redRacket;
handle["./img/blueRacket.png"] = blueRacket;
handle["./img/blackRacket.png"] = blackRacket;

exports.handle = handle;