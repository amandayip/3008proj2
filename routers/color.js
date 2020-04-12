const express = require("express");
const router = express.Router();
const ColorDb = require('../models/ColorDb');

router.post('/', async (req, res) => {
    console.log("The request: ", req.body);
    const color = new ColorDb({
        color: req.body.color
    });
    try{
        const saveColor = await color.save();
        res.json(saveColor);
    }catch (e){
        res.json({message: e});
    }
});

router.get('/otherpage', async (req, res) => {
    try{
        const colors = await ColorDb.find();
        console.log("the colors: ", colors);
        //res.json(colors);
        res.render("otherpage")
    }catch (e){
        console.log("the error: ", e);
    }
});

/* router.post('/otherpage', async (req, res) => {
    try{
        const colors = await ColorDb.find();
        res.json(colors);
    }catch (e){
        console.log("the error: ", e);
    }
}); */
module.exports = router;