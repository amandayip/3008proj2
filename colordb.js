var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/colordb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("colordb");
  dbo.createCollection("colors", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("colordb");
  while (dbo.colors.count() < 2097153) {
    do {
        var color = Math.floor((Math.random()*3000000)+1);
    } 
    dbo.colors.insert({"code" : "#" + ("000000" + color.toString(16)).slice(-6)});
}

    db.close();
  });
});