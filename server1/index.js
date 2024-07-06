const express=require('express');
const mongoose = require('mongoose');
const router =express.Router();
const app= express();
const port= 3001;
const userApi = require('./routes/users')
const authorApi = require('./routes/author');
const bookApi = require('./routes/book');
const libraryApi = require('./routes/library');


app.use(express.json());

//app.use('/',userApi)
app.use('/author',authorApi)
app.use('/book',bookApi)
app.use('/', libraryApi)

const url = 'mongodb+srv://umavemula2005:WJFYDMeud2BfPtbW@cluster0.rlxavnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ;

mongoose.connect(url).then(()=>{console.log('mongodb connected')}).catch((err)=>console.log(err));

//route to handle /users api
//app.use('/users', userApi)
//app.use('/authors', authorApi);
//app.use('/books', bookApi);

//apiendpoint, router

app.listen(port, ()=>{
    console.log(`server live at port ${port}`)
});
