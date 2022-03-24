const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const VSchema= new Schema({
    email: String,
    password: String
}
    );
module.exports=mongoose.model('user',VSchema,'vcollect');