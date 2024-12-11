const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json());

// Post new user data to the database
app.post("/signup", async (req, res) => {
  try {
    // Validation of the data
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
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
app.post("/login", async(req, res)=>{
  try {
    const {emailId, password} = req.body;
    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new Error("Invalid credentials")
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(isPasswordValid){
      res.send("Login sucessful!!!");
    }else{
      throw new Error("Invalid credentials");
    }    
  } catch (error) {
    res.status(400).send("ERROR:" + error.message);
  }
});

// Get Only one user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      return res.status(400).send("User not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong", error);
  }
});

// Feed API - Get all the users from the database
app.get("/feed", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const user = await User.findByIdAndDelete({_id:userId})
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Update user data
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("updates not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more then 10");
    }

    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    //console.log(user);
    res.send("User updated Sucessfully");
  } catch (error) {
    res.status(400).send("Update failed" + error.message);
  }
});

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
