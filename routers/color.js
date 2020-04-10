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
})

module.exports = router;