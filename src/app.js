const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());



//Post our data in database
app.post("/signup", async (req, res) => {
  //Creating a new instance of my User model
  const user = new User({
    firstName: "Shubham",
    lastName: "Shukla",
    emailID: "shubh@gmail.com",
    password: "shubh@123",
  });
  await user.save();
  res.send("User Added sucessfully")
});

// Get user by email
app.get("/user", async (req, res) => {
  // Use req.query.emailId for query parameters
  const userEmail = req.body.emailId;
  if (!userEmail) {
    return res.status(400).send("Email ID is required");
  }
  
  try {
    const users = await User.find({ emailId: userEmail });
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});






//feed API - GET / feed - get all the users from the database
app.get("/feed",(req,res)=>{

})


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