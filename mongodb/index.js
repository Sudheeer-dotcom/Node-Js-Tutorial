
const express = require('express');
const app = express();
const mongoose = require('mongoose');
PORT = 5000;

DB_URL = 'mongodb://localhost:27017';

mongoose.connect(DB_URL);
const conn = mongoose.connection;

conn.once('open',()=>{
    console.log('successfully database connected');
})
conn.on('error',()=>{
    console.log('error connection to database');
    process.exit();
})
app.get('/home',(req,res)=>{
    res.send('Welcome to mongodb')
})



app.listen(PORT,()=>{
    console.log(`serevr running at http://localhost:${PORT}`)
})