const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel')
const MenuItem = require('../models/itemsModel');

// Add item to the cart
router.post('/cart', async(req, res)=>{
    try{
        const {userId, menuItemId, quantity } = req.body;

        // find users cart of create a new one if it doesn't exist.
        let cart = await Cart.findOne({user:userId});
        if(!cart){
            cart = new Cart({user:userId, items:[]});
        }

        // find the menu item to ad
        const menuItem = await MenuItem.findById(menuItemId);
        if(!menuItem){
            return res.status(404).json({mssg:'Menu item not found!'});
        }

        // check if the item already exists in the cart
        const existingItem = cart.items.find(item=>item.menuItem.toString()===menuItemId);
        if(existingItem){
            // if the item already exists, update the quantity
            existingItem.quantity+=quantity;
        }else{
            // if it's a new item, add it to the cart
            cart.items.push({menuItem:menuItemId, quantity});
        }

        // calculating the total price
        cart.total!=menuItem.price*quantity;

        // save the cart
        await cart.save();

        res.json({mssg:"Item added to cart"});
    }catch(err){
        res.status(500).json({mssg:'Failed to add item to the cart'});
    }
});

// updating item quantity in the cart
router.put('/cart', async(req,res)=>{
    try{
        const {userId, itemId, quantity} = req.body;

        // Find the user's cart
        const cart = await Cart.findOne({user:userId});
        if(!cart){
            return res.status(404).json({mssg:'Cart not found!'});
        }

        // Find the item in the cart
        const cartItem = cart.items.find(item=>item._id.toString()===itemId);
        if(!cartItem){
            return res.status(404).json({mssg:'Item not found in the cart!'});
        }

        // Find the menu item to get the price
        const menuItem = await MenuItem.findById(cartItem.menuItem);
        if(!menuItem){
            return res.status(404).json({mssg:'Menu Item not found!'});
        }

        // update the quantity and total price
        cartItem.quantity = quantity;
        cart.total+=(quantity - cartItem.quantity)*menuItem.price;

        await cart.save();

        res.json({ message: 'Cart updated successfully' });
    }catch (err) {
        res.status(500).json({ message: 'Failed to update cart' });
      }
});

// get user's cart
router.get('/cart', async(req, res)=>{
    try{
        const {userId} = req.query;

        // find user's cart
        const cart = await Cart.findOne({user:userId}).populate('items.menuItems');
        if(!cart){
            return res.status(404).json({mssg:'Cart not found!'});
        }

        res.json(cart);
    }catch(err){
        res.status(500).json({mssg:'failed to get cart'});
    }
});

module.exports = router;