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

let dataSet = [];
router.get('/otherpage', async (req, res) => {
    try{
        const colors = await ColorDb.find();
        dataSet.push(colors);
        //console.log("the colors: ", colors);
        //res.json(colors);
        res.render("otherpage");
        let color = colors[0].color;
        console.log("the color: ", color);
        document.getElementById("pass").innerHTML = color;
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