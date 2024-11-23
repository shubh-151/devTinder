const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

<<<<<<< HEAD
app.use("/user", (req, res)=>{
    console.log("Handling the route user!!");
    res.send("response!!");
   
=======
app.post("/signup", async (req, res) => {
  //Creating a new instance of my User model
  const user = new User({
    firstName: "gAURAV",
    lastName: "pundir",
    emailID: "gaurav@gmail.com",
    password: "gaurav@123",
>>>>>>> a182478a13e7ed2973bb26b5f681bf6a0a80fba2
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
