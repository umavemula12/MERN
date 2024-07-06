//resolvers.js
//to pre process the queries 
//query->to retrive the data (Exactly what data be)
//mutation -> to update the data
const { Query } = require('mongoose');
const User = require('./model/userSchema');
//parent
//define our resolvers to excute
const resolvers ={
    Query:{
        getUser:async(_,{id})=>{
            return await User.findById(id);
        },
        getUsers: async()=>{
            return await User.find();
        },
        searchUsers: async(_, {name})=>{
            return await User.find({name:new RegExp(name, 'i')})
        },
        getLimitedUser: async(_,{limit, offset})=>{
            return await User.find().skip(offset).limit(limit);
        },
    },
    Mutation:{
        createUser:async(_, {input})=>{
            const newUser = new User(input);
            return await newUser.save();
        },
        changePass:async(_,{id,password})=>{
            return await User.findByIdAndUpdate(id,{password:password});
        },
        updateUser: async(_,{id,input})=>{
            return await User.findByIdAndUpdate(id, input);
        },
        deleteUser: async(_,{id})=>{
            return await User.findByIdAndDelete(id);
        },
    },

    
    User:{
        email:(parent)=> parent.email || '',
        name:(parent)=> parent.name || '',
    },

}
module.exports = resolvers; //export resolves


/*
mutation{
    createUser(input:{name:"Raju",email:"raju@gamail.com",password:"raju123"})
}

mutation{
    createUser(input:{name:"Raju",
    email:"raju@gamail.com",      
    password:"raju123"})
    {id name email password}
}

mutation{
  updateUser(id:"6685070f7b8f30e0c880a04a" , 
  input:{name:"Raju", email:"raju25@gmail.com", password:"raju00"} ) {
    id  name email password
  },
  changePass(id: "668508ed213778533b866fd1", password: "raju25") {
    id name email password
  }
  deleteUser(id: "668508ed213778533b866fd1") {
    name
  }
  createUser(input: 
  {name:"Raju2", email:"raju2@gmail.com", password:"raju2@"}) {
    id name email password
    
  }
}
*/