var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/items');

db.connection.on('open', function(){
  console.log(`connected to ${db.connection.name} on ${db.connection.host} ${db.connection.port}`);
});
