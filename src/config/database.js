const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://shubhin151:Yonosbi12@namastenode.yvaqd.mongodb.net/devTinder"
    );
};


module.exports = connectDB;