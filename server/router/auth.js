const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('../db/conn');
const User = require("../model/userSchema");



router.get('/' , (req, res) =>{

    res.cookie("test", 'aqeel')
    res.send('heel0 word from the server router js')
});
////asyn code
router.post('/register' , async (req, res) =>{


    //this code line means agr humy specfie data chaiyae tu yeh estmal kr sgthy
    const {name, email, password, cpassword} = req.body;
    if (!name || !email || !password || !cpassword){
        return res.status(422).json({error: "plz filled the field properly"});
    }
    try {
        const userExist = await User.findOne({ email: email});
        if (userExist) {
            return res.status(422).json({ error: "Email alredy Exist"});
        } else if(password != cpassword) {
            return res.status(422).json({ error: "password are not match"})

        } else {
            const user = new User({name, email, password, cpassword})
            ///save hony sy phylae hashed mae change keo password
             await user.save(); 
          
            res.status(201).json({ message: "user register succesfully"})
        }
   



    }
    catch(err) {
        console.log(err);

    }

    ///check register info of user 
  
    
    // res.send("mera register page") (   ErrorCaptureStackTrace(err);^) this is dirty error
    // console.log(name);
    // console.log(email)
    // console.log(req.body);
    // res.json({message: req.body });


});
///LOGIN  ROUTE
router.post('/login', async (req, res)=>{
    try {
        const {name, password} = req.body;
        if (!name || !password) {
            return res.status(400).send({error:"invalid"})
        }
        const userlogin = await User.findOne({ name: name });
        if (userlogin){
            const isMatch = await bcrypt.compare(password, userlogin.password);
            const token = await userlogin.generateAuthToken();

            console.log(token)
            res.cookie('jwttoken', 'Aqeel', {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            ///create a cokki4res.cokkie


            if(!isMatch) {
                res.status(422).send({message: "user error"})
            } else {
                res.send({meassage:" wellcome user  login sucessfully"})
    
                
            }

        } else {
            res.status(422).send({message: "invalid"})
           

        }
       
       

    } catch(err) {
        console.log(err);
    }

    // console.log(req.body);
    // res.send({message:"awesome"});
})


module.exports= router