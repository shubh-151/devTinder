const express = require('express');

const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");

profileRouter.post("/sendConnectionRequest",userAuth,async(req,res)=>{
  const user=req.user;
  // sending a connection request
  console.log("Sending a connection request")
  res.send(user.firstName+ "Send the connection request")
})





module.exports = profileRouter;