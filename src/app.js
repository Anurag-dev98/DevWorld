const express = require('express')
const app = express()
PORT = 7777

app.get('/testing', (req,res)=>{
    res.send('Hello World')
})

app.listen(PORT)