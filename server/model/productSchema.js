//this is my mongodd schema /model/userSchema.js
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    imageURL:{type:String, require:true},
    price:{type:Number, require:true},
    name:{type:String, require:true},
    description:{type:String, require:true},
    
});
module.exports = mongoose.model('User',productSchema);

