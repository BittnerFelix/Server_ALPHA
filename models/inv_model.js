const mongoose=require("mongoose");
const testShema = mongoose.Schema({
   
    _id:{
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
    },
    description:{
        type: String,
        require: false,
    },
    characteristics:{
        type: Array,
        require: true,
    },
    lokalerpfad:{
        type: String,
        require: false,
    }

    
});
module.exports=mongoose.model("Inv_test",testShema)
