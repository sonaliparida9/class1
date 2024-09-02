const express = require('express')
const app = express();
const path =require('path')

app.get('/',(req,res)=>{
    res.send('<h2>Welcome to express js</h2>')
})

app.get('/contact',(req,res)=>{
    res.send('This is contact us page')
})
app.get('/website',(req,res)=>{
    res.sendFile(path.join(__dirname,'ecommerce','index.html'));
})
app.use(express.static('ecommerce'));
app.get('/api',(req,res)=>{
    res.json([
        {
            Firstname:'sonali',
            Lastname:'parida'
        },
        {
            Firstname:'sangita',
            Lastname:'pradhan'
        }
    ])
})
app.listen(3000,()=>{
    console.log("Server is running")
})