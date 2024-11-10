const express = require("express");

const app = express();

app.use("/users", (req, res,next)=>{
    console.log("Handling the route user!!");
    //res.send("response!!");
    next();
  });

app.listen(7000, () => {
  console.log("server is listining on port 7000..");
});
