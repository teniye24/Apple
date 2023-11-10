const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();

app.listen(3001, () => console.log("listening to port 3001 "));
// app.get("/", (req, res)=>res.send("up and running..."))

app.use(express.json());





const mysqlConnection = mysql.createConnection({
  user: "myDBuser",
  password: "mydbpractice23",
  host: "localhost",
  database: "mydb",
});

mysqlConnection.connect((err) => {
  if (err) console.log(err);
  console.log("connected to my database");
});

app.use(cors());

///////////// end of question 1 /////////////

// Create table //
app.get("/install", (req, res) => {
  let message = "Tables Created";
  let createProducts = `CREATE TABLE if not exists Products(
    product_id int auto_increment, 
    product_url VARCHAR(255) not null, 
    product_name VARCHAR(255) not null, 
    PRIMARY KEY (product_id)
    );`;

  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id))`;

  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id))`;

  let createUsers = `CREATE TABLE if not exists Users(
    user_id int auto_increment,
    user_name varchar(50) not null,
    password varchar(50) not null,
    PRIMARY KEY (user_id)
)`;

  let createOrders = `CREATE TABLE if not exists Orders(
    order_id int auto_increment,
    product_id int(11) not null,
    user_id int(11) not null,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id))`;

  mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createUsers, (err, results, fields) => {
    if (err) console.log(err);
    // console.log("working");
  });

  mysqlConnection.query(createOrders, (err, results, fields) => {
    if (err) console.log(err);
  });

  res.end(message);
  console.log("Table created");
});


///// end of question 2 //////



// (body-parser deprecated)
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// (use this instead) (middle ware to extract info from the html name attribute) ///


app.use(
  express.urlencoded({
    extended: true,
  })
);





// Insert a new iPhone
app.post("/add-iphones", (req, res) => {
  console.table(req.body);

  const {
    imgPath,
    iphoneLink,
    iphoneTitle,
    startPrice,
    priceRange,
    briefDescription,
    fullDescription,
    userName,
    password,
  } = req.body;

  // console.log(req.body["product_id"]);

  let insertProduct = `INSERT INTO Products (product_url, product_name) VALUES (?, ?)`;

  // console.log(iphoneLink);

  let insertDescription = `INSERT INTO ProductDescription (product_id, product_brief_description,  product_description,  product_img, product_link) VALUES (?, ?, ?, ?, ?)`;

  let insertPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)`;

  let insertUser = `INSERT INTO Users (user_name, password) VALUES (?, ?)`;

  let insertOrder = `INSERT INTO Orders (product_id, user_id) VALUES (?, ?)`;

  mysqlConnection.query(
    insertProduct,
    [iphoneLink, iphoneTitle],
    (err, results, fields) => {
      if (err) console.log(err);
      console.log(results);

      const id = results.insertId;
      // console.log(id);

      mysqlConnection.query(
        insertDescription,
        [id, briefDescription, fullDescription, imgPath, iphoneLink],
        (err, results, fields) => {
          if (err) console.log(err);
        }
      );

      mysqlConnection.query(
        insertPrice,
        [id, startPrice, priceRange],
        (err, results, fields) => {
          if (err) console.log(err);
        }
      );

      mysqlConnection.query(
        insertUser,
        [userName, password],
        (err, results, fields) => {
          if (err) console.log(err);

          const userId = results.insertId;

          mysqlConnection.query(
            insertOrder,
            [id, userId],
            (err, results, fields) => {
              if (err) console.log(err);
            }
          );
        }
      );
    }
  );
  res.end("You have successfully added product...");
});
 app.get("/iphones", (req, res) => {
   mysqlConnection.query(
     "SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
     (err, rows) => {
       let iphones = { products: [] };
       iphones.products = rows;
       var stringIphones = JSON.stringify(iphones);
       if (!err) res.end(stringIphones);
       else console.log(err);
     }
   );
 });

  // app.get("/detail-info", (req, res) => {
  //   mysqlConnection.query(
  //     "SELECT * FROM Orders JOIN Users ON Orders.user_id = Users.product_id",
  //     (err, results, fields) => {
  //       if (err) console.log("Error occur during selection", err);

  //       res.end("hey");
  //     }
  //   );

  // });


// app.post("/addiphones", (req, res) => {
//   // console.log(bodyparser.json);
//   console.table(req.body);
//   const {
//     Id, 
//     img,
//     Url,
//     Title,
//      Brief, 
//      StartPrice, 
//      PriceRange, 
//      Description }= req.body;
 
//   let insertId =`INSERT INTO products (product_id) VALUES (?) `
//   let 
//   mysqlmysqlConnection.query(sqlAddToProducts, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });

//   mysqlmysqlConnection.query(
//     "SELECT * FROM Products WHERE product_url = '" + Id + "' ",
//     (err, rows, fields) => {
//       addedProductId = rows[0].product_id;
//       console.log(addedProductId);
//       if (err) console.log(err);

//       if (addedProductId != 0) {
//         let sqlAddToProductDescription =
//           "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
//           addedProductId +
//           "', '" +
//           Brief +
//           "', '" +
//           Description +
//           "', '" +
//           img +
//           "', '" +
//           Url +
//           "' )";

//         let sqlAddToProductPrice =
//           "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
//           addedProductId +
//           "', '" +
//           StartPrice +
//           "', '" +
//           PriceRange +
//           "')";

//         mysqlmysqlConnection.query(
//           sqlAddToProductDescription,
//           function (err, result) {
//             if (err) throw err;
//             console.log("Product description inserted");
//           }
//         );

//         mysqlmysqlConnection.query(sqlAddToProductPrice, function (err, result) {
//           if (err) throw err;
//           console.log("Product price inserted");
//         });
//       }
//     }
//   );
//   res.end("Product added");
// });

//Get all iphones
// app.get("/iphones", (req, res) => {
//   mysqlConnection.query(
//     "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
//     (err, rows, fields) => {
//       let iphones = { products: [] };
//       iphones.products = rows;
//       var stringIphones = JSON.stringify(iphones);
//       if (!err) res.end(stringIphones);
//       else console.log(err);
//     }
//   );
// });

// app.listen(3002, () => console.log("Listening to : 3002"));

  
