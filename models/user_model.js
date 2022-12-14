const mongoose=require("mongoose");
const userCreateShema = mongoose.Schema({
    _id:{
        type: String,
        require: true,
    },
    fname:{
        type: String,
        require: true,
    },
    lname:{
        type: String,
        require: true,
    },
    hashedAndSaltedPassword:{
        type: String,
        require: true,
    },
    emailVerified:{
        type: Boolean,
        require: false,
    },
    bdate:{
        type: Date,
        require: true,
    },
    
});
module.exports=mongoose.model("Users",userCreateShema)
