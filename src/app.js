const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //Creating a new instance of my User model
  const user = new User({
    firstName: "shubham",
    lastName: "Shukla",
    emailID: "shubham@shukla.com",
    password: "SHUKLA@123",
  });
  await user.save();
  res.send("User Added sucessfully")
});

connectDB()
  .then(() => {
    console.log("database connection stablished");
    app.listen(7000, () => {
      console.log("server is listining on port 7000..");
    });
  })
  .catch((err) => {
    console.log("databse cannot be connected");
  });
