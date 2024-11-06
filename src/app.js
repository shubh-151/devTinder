const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user 1!!");
    //res.send("1st response!!");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 2!!");
    //res.send("2nd Response!!")
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 3!!");
    //res.send("3nd Response!!")
    next();
  },
  [(req, res, next) => {
    console.log("handling the route user 4!!");
    //res.send("4nd Response!!")
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 5!!");
    res.send("5nd Response!!");
    next();
  }],
);

app.listen(7000, () => {
  console.log("server is listining on port 7000..");
});
