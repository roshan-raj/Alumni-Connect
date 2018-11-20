var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type:String, require:true},
    phone: {type:String, require:true},
    email: {type:String, require:true},
    feedback: {type:String, require:true}
});

module.exports = mongoose.model('Contact',schema);