const express = require("express");
const signupRouter=express.Router();
const Signupdata=require('../model/Signupdata')

  
signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav : [{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'}],
        title:'Library',
        
    });
});  


// signupRouter.post('/login',function(req,res){
//     res.redirect('/login'
       
        
//     );
// });  

signupRouter.post('/add',function(req,res){
    var item = { 
        // title: req.body.title,
        // author:req.body.author,
        // genre:req.body.genre,
        // image:req.body.image
        name:req.body.name,
        date:req.body.date,
        address: req.body.address,
        gender: req.body.gender,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password

    }
    var signup =Signupdata(item);
    signup.save();//saving to database
    res.redirect('/login');
   
});
module.exports=signupRouter;