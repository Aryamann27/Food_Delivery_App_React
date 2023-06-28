const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:mongoose.Types.ObjectId,
        ref:'Cart'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;