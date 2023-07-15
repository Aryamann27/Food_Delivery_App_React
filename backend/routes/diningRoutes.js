const express = require('express');
const router = express.Router();
const Restos = require('../models/diningModel')

// get request to fetch the items from the database
router.get('/', (req, res)=>{
    Restos.find()
    .then(hotels=>res.json(hotels))
    .catch(err=>res.status(400).json('Error: '+err));
});

// post request to add items into the db
router.post('/', (req, res)=>{
    const {name, approxPrice, category, area, imgUrl} = req.body;

    const newHotel = new Restos({
        name,
        approxPrice,
        category,
        area,
        imgUrl
    });
    
    newHotel.save()
    .then(()=>res.json('Hotel added!'))
    .catch(err=> res.status(400).json('Error: '+err));
});

module.exports = router;
