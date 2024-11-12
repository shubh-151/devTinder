const express = require("express");
const app = express();



const {adminAuth} = require("./middlewares/auth.js")
//Handle Auth Middleware for the all GET,POST........request
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  //logic of checking if the request is authorized 
    res.send("All data sent");  
});

app.get("/admin/deleteUser", (req, res) => {
  //logic of fetching the data
  res.send("Delete a user");
});

app.use("/users", (req, res,next)=>{
    console.log("Handling the route user!!");
    //res.send("response!!");
    next();
  });


app.listen(7000, () => {
  console.log("server is listining on port 7000..");
});
