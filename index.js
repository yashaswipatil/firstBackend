require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/' , (req , res) => {
    res.send("Hello Universe!")
})

app.get("/twitter" , (req, res) => {
    res.send("phoenix_yp")
})

app.get("/login" , (req,res) => {
    res.send('<h1>Please Login at yesashwinipatil.com</h1>')
})

app.get("/youtube" , (req , res) => {
    res.send('<h2>Travel Diaries</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})