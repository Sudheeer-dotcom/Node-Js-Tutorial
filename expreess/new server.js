
const express = require('express')

const app = express()

const port = 4000

const firstHandler = ((req,res,next)=>{
    if(50<100){
        next()
    }
})
const secondHandler = ((req,res,next)=>{
    if(30<60){
        next()
    }
})

app.get('/sudheer',firstHandler,(req,res)=>{
    res.send("Short & Sweet Memories is Enough for ME")
})

app.get('/King',secondHandler,(req,res)=>{
    res.send("VIRAT KOHLI is the King Of Cricket")
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
});