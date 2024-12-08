const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
    },
    photoUrl:{
        type:String,
        default:""
    },
    about:{
        type:String,    
        default:"This is a default about the user",
    },
    skills:{
        type:[String],
    },
})

module.exports = mongoose.model("User",userSchema); 


// const User = mongoose.model("User",userSchema);
// module.exports = User;