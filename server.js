// =======================================
//              DEPENDENCIES
// =======================================

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// =======================================
//             CONFIGURATION
// =======================================

const port = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost' + 'UWSBakery';

// connect to Mongo
mongoose.connect('mongodb://localhost:27017/UWSBakery', { useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongoose...');
});

// =======================================
//             MIDDLEWARE
// =======================================


const bakedItemsController = require('./controllers/bakedItems.js');
app.use('/bakedItems', bakedItemsController);

// =======================================
//              LISTENER
// =======================================

app.listen(3000, ()=>{
  console.log(`UWSBakery App listening on port: ${port}`);
});
