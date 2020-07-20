const express = require("express");
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');

adminRouter.get('/',function(req,res){
    res.render("addbook",{
        nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'},{link:'/admin',name:'ADD BOOK'}],
        title:'Library',
    });
});
adminRouter.post('/add',function(req,res){
    var item = { 
        title: req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
    }
    var book =Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');
   
});

module.exports=adminRouter;