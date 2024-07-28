// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { list, detail } = require('../controllers/products');

// /products viene así desde el app
/*** GET ALL PRODUCTS ***/ 
router.get('/', list); 

/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', detail); 



module.exports = router;
