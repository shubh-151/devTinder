const express = require("express");

const app = express();

app.use("/user", (req, res)=>{
    console.log("Handling the route user!!");
    res.send("response!!");
   
  });

app.listen(7000, () => {
  console.log("server is listining on port 7000..");
});
