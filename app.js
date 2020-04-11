const express = require('express');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const addColors = require('./colorarray');
const path = require('path');

mongoose.Promise = global.Promise = bluebird;

//router
const colourRouter = require('./routers/color')

mongoose.connect( `mongodb://localhost:27017/colordb`, 
    {useNewUrlParser: true, useUnifiedTopology: true}
);
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(__dirname + '/node_modules'));
app.set('views', __dirname + '/public/html');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/otherpage', colourRouter);

//app.get('/otherpage');
app.get('*', (req, res) => res.render('index.html'));

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    addColors();
  });



app.listen(app.get('port')).on('close', async err => {
    try {
        mongoose.disconnect();
    } catch (e) {
        console.log('DB SERVER OUT')
    }
})