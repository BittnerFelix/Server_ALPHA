const mongoose=require("mongoose");
const Shopping_Shema = mongoose.Schema({
   
    
    product_id:{
        type: String,
        require: true,
    },
    size:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    price:{
        type: String,
        require: true,
    }

    
});
module.exports=mongoose.model("shoppingbag",Shopping_Shema)