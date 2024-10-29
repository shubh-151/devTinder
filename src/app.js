const express = require("express");


const app = express();


// order matter for all the routes in nodejs 
app.use("/users",(req,res)=>{
    res.send("HAHAHAHAHAHAHAHA")
});


// this will only handle Get call to /user
app.get("/users",(req,res)=>{
    res.send({firstName:"Shubham", lastName:"Shukla"})
});

// this will only handle Get call to /user
app.post("/users",(req,res)=>{
    res.send("Data saved in database")
});

app.delete("/users",(req,res)=>{
    res.send("Data delete from database")
});



// this route will work for all http request get and post etc
app.use("/test",(req,res)=> {
    res.send("hello form the  test route");
})

app.listen(3000,()=>{
    console.log("server is listining on port 3000..");
});