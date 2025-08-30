const express = require('express');
const userRouter = express.Router();
const User = require("../models/user");
const { userAuth } = require('../middlewares/auth');
const ConnectionRequest = require("../models/connectionRequest");

const USER_SAFE_DATA = "firstName lastName emailId";

// Get all the pending connections request for the loggedIn user
userRouter.get("/user/requests/received",userAuth,async(req,res)=>{
    try {
        const loggedInUser = req.user;

        const connectionRequest = await ConnectionRequest.find({
            toUserId:loggedInUser._id,
            status:"interested",
        }).populate("fromUserId",USER_SAFE_DATA);
        //}).populate("fromUserId",["firstName","lastName"]);


        res.json({
            message:"Data Fetched Successfully",
            data:connectionRequest,
        })
        
    } catch (err) {
        req.statusCode(400).send("ERROR:"+ err.message);        
    }
}); 
    

userRouter.get("/user/connections",userAuth,async(req,res)=>{
    try {
        const loggedInUser = req.user;
        const connectionRequest = await ConnectionRequest.find({
            $or:[
                {toUserId:loggedInUser._id,status:"accepted"},
                {fromUserId:loggedInUser._id,status:"accepted"},
            ],
        }).populate("formUserId",USER_SAFE_DATA )
        .populate("toUserId",USER_SAFE_DATA );

        const data = connectionRequest.map((row)=>{
            if (row.fromUserId._id.toString()===loggedInUser._id.toString()){
                return row.toUserId
            }
            return row.fromUserId;
        });

        res.json({data:connectionRequest});
    } catch (err) {
        req.statusCode(400).send("ERROR:"+err.message)   
    }
});


userRouter.get("/feed",userAuth,async(req,res)=>{
    try {

        const loggedInUser=req.user;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        limit = limit>50 ? 50 : limit; // Limit to a maximum of 50  

        const connectionRequest = await ConnectionRequest.find({
            $or:[{fromUserId:loggedInUser._id},{toUserId:loggedInUser._id}],
        }).select("fromUserId toUserId");
        // .populate("fromUserId","firstName")
        // .populate("toUserId","firstName");
        //console.log(hideUsersFromFeed); 
        const hideUsersFromFeed = new Set();
        connectionRequest.forEach(req=>{
            hideUsersFromFeed.add(req.fromUserId.toString())
            hideUsersFromFeed.add(req.toUserId.toString())
        });
        console.log(hideUsersFromFeed.toString());
        
        const users = await User.find({
           $and:[
            { _id:{ $nin: Array.from(hideUsersFromFeed)}},
            { _id:{$ne:loggedInUser._id}},
           ],
        }).select(USER_SAFE_DATA).skip((page-1)*limit).limit(limit);        
        res.json({data:users});
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

module.exports = userRouter;