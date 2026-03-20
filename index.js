const express = require('express')
const app = express()

app.get('/oi', (req, res) => {
    res.json({message:"Oi"})
})

app.listen(3000, ()=>{
    console.log('Server Ok')
})