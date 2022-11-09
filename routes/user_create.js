const express = require("express");
const router = express.Router();
const UserCreateModel=require("../models/user_model")

router.post("/createUserTask", async (req, res)=>{
    const userCreate=new UserCreateModel({
        _id: req.body.myID,
        fname: req.body.myfname,
        lname: req.body.mylname,
        hashedAndSaltedPassword: req.body.mypasswd,

    });
    try{
        const newUser = await userCreate.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({msg: error});
    }
});

module.exports = router;