const express = require('express');
const router = express.Router();
const MenuItem = require('../models/itemsModel')

// get request to fetch the items from the database
router.get('/', (req, res)=>{
    MenuItem.find()
    .then(menuItems=>res.json(menuItems))
    .catch(err=>res.status(400).json('Error: '+err));
});

// post request to add items into the db
router.post('/', (req, res)=>{
    const {name, price, quantity} = req.body;

    const newMenuItem = new MenuItem({
        name,
        price,
        quantity
    });
    
    newMenuItem.save()
    .then(()=>res.json('Menu item added!'))
    .catch(err=> res.status(400).json('Error: '+err));
});

module.exports = router;
