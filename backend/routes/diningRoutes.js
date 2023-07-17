const express = require('express');
const router = express.Router();
const Restos = require('../models/diningModel');


// get request to fetch the items from the database
router.get('/', (req, res)=>{
    Restos.find()
    .then(hotels=>res.json(hotels))
    .catch(err=>res.status(400).json('Error: '+err));
});

// post request to add items into the db
router.post('/', (req, res)=>{
    const {name, approxPrice, category, area, rating, imgUrl} = req.body;

    const newHotel = new Restos({
        name,
        approxPrice,
        category,
        area,
        rating,
        imgUrl
    });
    
    newHotel.save()
    .then(()=>res.json('Hotel added!'))
    .catch(err=> res.status(400).json('Error: '+err));
});

// get a single resto
/* router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    console.log(id);
  
    Restos.findById(id)
    .then(result=>{
        res.status(200).json(result)

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});
 */
module.exports = router;
