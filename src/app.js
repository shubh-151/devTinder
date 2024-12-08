const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

//Post our data in database
app.post("/signup", async (req, res) => {
  //Creating a new instance of my User model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added sucessfully");
  } catch (error) {
    res.server(400).send("Error saving the user:" + err.message);
  }
});

// Get user by email
// ###For find only on with same emailID the element###
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

//feed API - GET / feed - get all the users from the database
app.get("/feed", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({ emailId: userEmail });
    res.send(user);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Delete a user from the databse
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // Short hand writing
    //const user = await User.findByIdAndDelete({_id:userId});
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted sucessfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//Update data of the user
app.patch("/user/:userId", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
    });
    console.log(user);
    res.send("User updated");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
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
