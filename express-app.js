const express = require ('express')
const app = express()
const port = 3001
const cookieParser = require('cookie-parser')

app.listen(port, ()=>{
    console.log(`Listening on localhost:${port}`)
})


// Middleware

app.use(cookieParser())

// Routes

app.get('/login', (req,res)=>{
    const username = req.query.name
    if( username ){
        console.log(`cookie set for ${username}`)
        res.cookie("username", username)
    } else {
        console.log('please /login with ?name=')
    }
    res.end()
})

app.get('/hello', (req,res)=>{
    let username = req.cookies.username
    if( username ){
        console.log(`Hello ${username}`)
    } else {
        console.log('Please /login')
    }
    res.end()
})