const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library');

const schema = mongoose.schema;

const BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    genre: String,
    image: String
});
 