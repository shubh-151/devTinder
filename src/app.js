const express = require("express");
const connectDB = require("./config/database");


const app = express();

connectDB()
  .then(() => {
    console.log("database connectuion stablished");
    app.listen(7000, () => {
      console.log("server is listining on port 7000..");
    });
  })
  .catch((err) => {
    console.log("databse cannot be connected");
  });
