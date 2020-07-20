const express = require("express");
const Authordata = require("../model/Authordata");
const admin1Router=express.Router();


admin1Router.get('/',function(req,res){
    res.render("addauthor",{
        nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'},{link:'/admin',name:'ADD BOOK'},{link:'/admin1',name:'ADD AUTHOR'}],
        title:'Library',
    });
});
admin1Router.post('/add',function(req,res){
    var item = { 
        name: req.body.name,
        work:req.body.work,
        genre:req.body.genre,
        image:req.body.image
    }
    var author =Authordata(item);
    author.save();//saving to database
    res.redirect('/authors');
   
});


module.exports=admin1Router;