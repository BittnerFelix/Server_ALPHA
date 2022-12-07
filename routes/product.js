const express = require('express');
const router = express.Router(); 
const INVModel=require("../models/inv_model")

router.post("/product-create", async (req, res)=>{
  const Artcreate=new INVModel({
      _id: req.body._id,
      name: req.body._name,
      price: req.body._price,
      description: req.body._description,
      characteristics: [req.body._characteristics1,req.body._characteristics2,req.body._characteristics3,req.body._characteristics4,req.body._characteristics5,req.body._characteristics6],
      lokalerpfad: req.body.myurl

  });
  try{
      const newArt = await Artcreate.save();
      res.status(201).json(newArt);
      console.log("Artikel erstellst")
      console.log(req.body)
  } catch (error) {
      res.status(400).json({msg: error});
      console.log(error)
  }
});


router.get('/product', async (req, res) => {
   try {
    let test = await INVModel.find();
    res.json(test);
   } catch (e) {
    res.json({msg: e});
   }
  // ...
})

router.get('/topseller', async (req, res) => {
  try {
   let test = await INVModel.find({'topseller':"true"});
   res.json(test);
  } catch (e) {
   res.json({msg: e});
  }
 // ...
})

module.exports = router;