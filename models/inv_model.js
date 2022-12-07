const mongoose=require("mongoose");
const INVShema = mongoose.Schema({ 
    _id:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
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
    },
    topseller:{
        type: Boolean,
        require: false,
        default: false,
    }

    
});
module.exports=mongoose.model("Inv_test",INVShema)
