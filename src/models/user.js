const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
    },
    lastName:{
        type:String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) { // Pass the value to `isEmail`
            throw new Error("Invalid email address: " + value);
          }
        },
      },
    password:{
        type:String,
        validate(value) {
            if (!validator.isStrongPassword(value)) { // Pass the value to `isEmail`
              throw new Error("Enter your strong password:" + value);
            }
          },
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
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3rKvz6uu-2AH40I_ok5xx3&ust=1733831508238000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDV1OvPmooDFQAAAAAdAAAAABAE",
        
        validate(value) {
            if (!validator.isURL(value)) { // Pass the value to `isEmail`
              throw new Error("Invalid valid URL address: " + value);
            }
          },
    },
    about:{
        type:String,    
        default:"This is a default about the user",

    },
    skills:{
        type:[String],
    },
},{timestamps:true,})

module.exports = mongoose.model("User",userSchema); 


// const User = mongoose.model("User",userSchema);
// module.exports = User;