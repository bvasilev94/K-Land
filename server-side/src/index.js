const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./router.js");
const { auth } = require("./middlewares/authMiddleware.js");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/k-land")
  .then(() => console.log(`Connected to DB successfuly`))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Setting cors via lib
app.use(cors());
app.use(auth)

// Setting cors manualy
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   next();
// });

app.get("/", (req, res) => {
  res.send("hello restApi");
});

app.use(routes);

app.listen(3030, () =>
  console.log("RESTful server is running on port 3030....")
);
