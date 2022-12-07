const express = require('express');
const router = express.Router(); 
const BAGModel=require("../models/shopping_model")

router.post("/shoppingbag", async (req, res)=>{
  const BAGcreate=new BAGModel({
        _id: req.body._id,
      product_id: req.body.product_id,
      size: req.body.product_size,
      name: req.body.product_name,
      price: req.body.product_price

  });
  try{
      const newBAG = await BAGcreate.save();
      res.status(201).json(newBAG);
      console.log("Artikel hinzugefügt")
      console.log(req.body)
  } catch (error) {
      res.status(400).json({msg: error});
      console.log(error)
  }
});


router.get('/items', async (req, res) => {
   try {
    let shoppingbag = await BAGModel.find();
    res.json(shoppingbag);
   } catch (e) {
    res.json({msg: e});
   }
  // ...
})

router.get('/total', async (req, res) => {
  try {
   let shoppingbag = await BAGModel.aggregate([{$group: { _id: 0, totPrice: { $sum: '$price' }, totProduct: { $sum: 1 } }}]);
   res.json(shoppingbag);
  } catch (e) {
   res.json({msg: e});
  }
 // ...
})
module.exports = router;