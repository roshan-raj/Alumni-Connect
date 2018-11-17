var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

var schema = new Schema({
    name: {type:String, require:true},
    title: {type:String, require:true},
    content: {type:String, require:true},
    creation_dt:{type:Date, require:true}
});

module.exports = mongoose.model('Post',schema);