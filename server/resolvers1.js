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
            try{
                const {name,email, password}= input;
                if(!name||!email||!password){
                    throw new Error('Enter all the fields')
                }
                const newUser = new User({name, email, password});
                return await newUser.save();
            }catch(err){
                throw Error(err);
            }
        },
        
        changePass:async(_,{id,password})=>{
            try{
                const userNew= await User.findByIdAndUpdate(id,{password:password},{new:true});
                if(!userNew){
                    throw new Error('User not found')
                }
                return userNew;
            }catch(err){throw Error(err);}
        },
        updateUser: async(_,{id,input})=>{
            return await User.findByIdAndUpdate(id, input);
        },
        deleteUser: async(_,{id})=>{
            return await User.findByIdAndDelete(id);
        },
    },

    
    User:{
        email:(parent)=> parent.email || ' ',
        name:(parent)=> parent.name || ' ',
        password:(parent)=> parent.password || ' ',
    },

}
module.exports = resolvers; //export resolves
