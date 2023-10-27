var express = require('express');
var router = express.Router();
var CarModel = require('../models/CarModel');
var SuperModel = require('../models/SuperModel');
var FlyModel = require('../models/FlyModel');

router.get('/', async (req,res) => {
  var car = await CarModel.find();
  var supers  = await SuperModel.find();
res.render('home',{car:car, supers:supers});
})

module.exports = router;
