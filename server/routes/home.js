const express=require('express');
const router= express.Router()

router.get('/home',(req,res)=>{
    res.send(`<h1>This is your Home page API</h1>`)
})

module.exports= router;
