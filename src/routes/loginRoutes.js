const express = require("express");
const loginRouter=express.Router();
const SignupData=require('../model/Signupdata')

  
loginRouter.get('/',function(req,res){
    res.render("login",{
        nav : [{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'}],
        title:'Library',
        
    });
});  


// loginRouter.post('/index',function(req,res){
//     res.redirect('/'
       
        
//     );
// });  
loginRouter.post('/check',function(req,res){
    
        
      var email=req.body.email;
       var password=req.body.password
    
    SignupData.findOne({$and:[{'email':email},{'password':password}]},function(err,user){
        if(user){
            console.log("valid");
            res.redirect('/books');
        }
        else {
            
            res.redirect('/signup');
            // res.send("invalid credentials");
            
        }
    })
})



 module.exports=loginRouter;