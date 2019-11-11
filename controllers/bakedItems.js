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

// delete route
router.delete('/:id', (req, res)=>{
  BakedItems.findByIdAndRemove(req.params.id, (err, deletedBakedItem)=>{
    res.json(deletedBakedItem);
  });
});

// update route
router.put('/:id', (req, res)=>{
  BakedItems.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBakedItem)=>{
    res.json(updatedBakedItem);
  });
});

module.exports = router;
