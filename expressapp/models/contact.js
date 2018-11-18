var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    ename : {type:String, require:true},
    phone: {type:String, require:true},
    email:{type:String, require:true},
    feedback:{type:Date, require:true}
});

module.exports = mongoose.model('contact',schema);