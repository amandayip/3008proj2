var randomColor = require('randomcolor');
const ColorDb = require('./models/ColorDb');

module.exports = () => {
    // let bulk = await ColorDb.initializeUnorderedBulkOp();
    console.log('ADDING COLORS TO ARRAY FOR BULK INSERT');

    let count = 0;
    let colors = [];
    while (count < 10) { //generating colour codes
        let color = randomColor();
        colors.push({ color: color})
        console.log(`Added color ${count}: ${color}`)
        count++
    }
    
    ColorDb.insertMany(colors);

    console.log('FINISHED ADDING COLORS')
}


