const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library');

const schema = mongoose.schema;

const SignupSchema = new mongoose.Schema({
    name:String,
    date:String,
    address: String,
    gender: String,
    email:String,
    phone:String,
    password:String
});

var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;
 