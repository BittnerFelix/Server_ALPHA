const express = require("express");
const router = express.Router();
const UserCreateModel=require("../models/user_model")

router.post("/createUser", async (req, res)=>{
    const userCreate=new UserCreateModel({
        _id: req.body.myID,
        fname: req.body.myfname,
        lname: req.body.mylname,
        hashedAndSaltedPassword: req.body.mypasswd,
        bdate: req.body.mybdate

    });
    try{
        const newUser = await userCreate.save();
        res.status(201).json(newUser);
        console.log("Erfolreich User erstellt")
        console.log(req.body)
    } catch (error) {
        res.status(400).json({msg: error});
        console.log(error)
    }
});
router.get("/getUser", async (req, res) => {
    try{
        let userFind= await UserCreateModel.find();
        res.json(userFind);
    } catch (e){
        res.json({msg: e});
    }
});
module.exports = router;