const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Mongoose } = require('mongoose');

router.put("/:id", async(req,res)=>{
    conssole.log(req.json());
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true});
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;