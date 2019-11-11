const express = require('express');
const router = express.Router();

const BakedItems = require('../models/bakedItems.js');


// create route
router.post('/', (req, res)=>{
  BakedItems.create(req.body, (err, createdBakedItem)=>{
    res.json(createdBakedItem);
  });
});

// index route
router.get('/', (req, res)=>{
  BakedItems.find({}, (err, foundBakedItems)=>{
    res.json(foundBakedItems);
  });
});

// router.get('/', (req, res)=>{
//    res.send('index');
// });

module.exports = router;
