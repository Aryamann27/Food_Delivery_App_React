const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[{
        menuItem:{
            type:mongoose.Types.ObjectId,
            ref:'MenuItem',
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }],
    total:{
        type:Number,
        default:0
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;