const express = require("express");
const Authordata = require("../model/Authordata");
const authorsRouter=express.Router();



// var authors=[
//     {
//         name:'joseph barbera',
//         book:'Tom and Jerry',
//         img:"tj.jpg",
//         genre:'Cartoon',
//     },
//     {
//         name:'Tarantino',
//         book:'Django unchained',
//         img:"du.jpg",
//         genre:'Drama',

//     },
//     {
//         name:'Nolan',
//         book:'The Dark Knight',
//         img:"dk.jpg",
//         genre:'Fantasy',
//     }
// ]

authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render("authors",{
            nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'},{link:'/admin',name:'ADD BOOK'},{link:'/admin1',name:'ADD AUTHOR'}],
        title:'Library',
        authors,
    });
    });
});

// authorsRouter.get('/',function(req,res){
//     res.render("authors",{
//         nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'}],
//         title:'Library',
//         authors,
        
//     });
// });

module.exports=authorsRouter;