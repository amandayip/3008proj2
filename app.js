const express = require('express');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const addColors = require('./colorarray');

mongoose.Promise = global.Promise = bluebird;

//router
const colourRouter = require('./routers/color')

mongoose.connect( `${process.env.DB_STRING}/${process.env.DB_STRING}`, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Db is connected")
);

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use('/post', colourRouter);

app.get('/', (req, res) => {
    res.send("Hello world");
});

addColors();

app.listen(app.get('port')).on('close', async err => {
    try {
        mongoose.disconnect();
    } catch (e) {
        console.log('DB SERVER OUT')
    }
})