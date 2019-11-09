// =======================================
//              DEPENDENCIES
// =======================================

const express = require('express');
const app = express();

// =======================================
//             CONFIGURATION
// =======================================

const port = process.env.PORT || 3000;

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
