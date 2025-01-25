const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userAuth} = require("./middlewares/auth");
app.use(express.json());
app.use(cookieParser());
// Post new user data to the database
app.post("/signup", async (req, res) => {
  try {
    // Validation of the data
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    // Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("User Added successfully");
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

// Login API request
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      const token = await user.getJWT();
      res.cookie("token",token,{
        expires:new Date(Date.now()+8*3600000),
      });
      res.send("Login sucessful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("ERROR:" + error.message);
  }
});

app.get("/profile",userAuth, async (req, res) => {
  try {
    const user = req.user;    
    res.send(user);
  } catch (error) {
    res.status(400).send("ERROR:" + error.message);
  }
});



app.post("/sendConnectionRequest",userAuth,async(req,res)=>{
  const user=req.user;
  // sending a connection request
  console.log("Sending a connection request")
  res.send(user.firstName+ "Send the connection request")
})
connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7000, () => {
      console.log("Server is listening on port 7000...");
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });
