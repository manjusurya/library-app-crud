const express = require("express");
const app= express();
const booksRouter=require('./src/routes/bookRoutes');
const authorsRouter=require('./src/routes/authorRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const loginRouter=require('./src/routes/loginRoutes');
const adminRouter=require('./src/routes/adminRoutes');
const admin1Router=require('./src/routes/admin1Routes');
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);
app.use('/admin1',admin1Router);
app.get('/',function(req,res){
    res.render("index",{
        nav : [{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'}],
        
        title:'Library'
    });
});


app.listen(3000);