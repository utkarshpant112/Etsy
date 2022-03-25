//import the require dependencies
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const router = require("express").Router();

app.set("view engine", "ejs");

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.json());

//use express static folder
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const shopRoute = require("./routes/shop");
const orderRoute = require("./routes/order");
const favoriteRoute = require("./routes/favorite");

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/shop", shopRoute);
app.use("/api/order", orderRoute);
app.use("/api/favorite", favoriteRoute);

//start your server on port 3001
if (require.main === module) {
  app.listen(3001);
  console.log("Server Listening on port 3001");
}
