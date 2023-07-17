const mongoose = require('mongoose');

const restoSchema = new mongoose.Schema({
    _id:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    approxPrice:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    }
});

const Restos = mongoose.model('Restos', restoSchema);
module.exports = Restos;