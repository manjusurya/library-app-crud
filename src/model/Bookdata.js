//accessing mongoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/library');
//schema definition
const schema = mongoose.schema;

const BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    genre: String,
    image: String
});
 
//model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

 module.exports=Bookdata;