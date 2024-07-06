//mongoDB user schema
//capable of storing data in my mongodb
const mongoose= require('mongoose');

const schema={
    _id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
}
//conver this into a mongoose schema
const UserSchema = new mongoose.Schema(schema);
module.exports=mongoose.model('User', UserSchema);

