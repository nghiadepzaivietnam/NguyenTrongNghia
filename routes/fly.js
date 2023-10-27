var express = require('express');
var router = express.Router();
// const flyModel=require('../models/flyModel');
var FlyModel = require('../models/FlyModel');

// Get homePAGE
router.get('/', async (req,res) => {
  var fly = await FlyModel.find();
res.render('fly/index',{fly:fly})

})

router.get('/admin',async(req,res) => {
    var fly=await FlyModel.find();
    res.render('fly/admin',{fly:fly})
})

router.get('/detail/:id',async(req,res) => {
    var id=req.params.id;
    var fly=await FlyModel.findById(id);
    res.render('fly/detail',{fly:fly})
})

router.get('/delete/:id',async(req,res)=>{
    var id = req.params.id;
    await FlyModel.findByIdAndDelete(id);
    res.redirect('/fly/admin')
})

router.get('/add', async(req, res)=>{
    res.render('fly/add')
})

router.post('/add',async(req, res)=>{
    var fly=req.body;
    await FlyModel.create(fly)
    res.redirect('/fly/admin')
})

router.get('/edit/:id',async(req, res)=>{
    var id=req.params.id;
    var fly= await FlyModel.findById(id);
    res.render('fly/edit',{fly:fly})
})

router.post('/edit/:id',async(req,res)=>{
    var id=req.params.id;
    var fly=req.body;
    await FlyModel.findByIdAndUpdate(id, fly)
    res.redirect('/fly/admin');
})
router.post('/search',async(req,res)=>{
    var keyword=req.body.name;
    var fly=await FlyModel.find({name: new RegExp(keyword,"i")});
    res.render('fly/index',{fly:fly});
})

router.get('/admin/priceasc',async(req,res)=>{
    var fly=await FlyModel.find().sort({price:1});
    res.render('fly/admin',{fly:fly})
})
router.get('/admin/quantityasc',async(req,res)=>{
    var fly=await FlyModel.find().sort({quantity:1});
    res.render('fly/admin',{fly:fly})
})

module.exports = router;