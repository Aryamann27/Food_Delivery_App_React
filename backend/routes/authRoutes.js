const express = require('express');
const router = express('router');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const validator = require('validator');

router.post('/signup', async(req, res)=>{
    try{
        const {name, location, email, password} = req.body;

        // Validate user data
        if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
        }

        if (!validator.isLength(password, { min: 6 })) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({mssg:'Email already registered!'});
        }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // creating new user
    const newUser = new User({
        name, location, email, password:hashedPassword
    });

    await newUser.save();
    
    const token = jwt.sign({userId:newUser._id}, "mysecretkey");

    res.json({mssg:"Signed up successfully!", token});
    }catch(err){
        res.status(500).json({mssg:"Signing up failed!"});
    }
});

// logging in
router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({mssg:"User not found!"});
        }

        // compare password
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(401).json({mssg:"Invalid password!"});
        }

        const token = jwt.sign({userId:user._id}, "mysecretkey");

        // login successful
        res.json({mssg:"Login Successful", token});
    }catch(err){
        res.status(500).json({mssg:"Login failed!"});
    }
});

module.exports = router;