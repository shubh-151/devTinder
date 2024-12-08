const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

//Post our data in database
app.post("/signup", async (req, res) => {
  //Creating a new instance of my User model
  const user = new User({
    firstName: "Shivam",
    lastName: "Shukla",
    emailId: "shivam@gmail.com",
    password: "shivam@123",
  });
  await user.save();
  res.send("User Added sucessfully");
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
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = [
      "userId",
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];
    const isUpdateAllowed = Object.Keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      res.status(400).send("Update not allowed");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
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
