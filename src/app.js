const express = require("express");


const app = express();

app.use("/user", (req, res,next)=>{
    console.log("Handling the route user!!");
    //res.send("response!!");
    next();
},(req,res)=>{
    console.log("handling the route user 2!!")
    res.send("2nd Response!!")
});

app.listen(7000,()=>{
    console.log("server is listining on port 7000..");
});