
const express = require ('express')

const app = express()

const port = 5000

const firstHandler = ((req,res,next)=>{
   if(10<20){
      next()
   }
})
const secondHandler = ((req,res,next)=>{
   if(50>20){
      next()
   }
})
app.get('/home',firstHandler,(req,res)=>{
   res.send("Welcome to my Home")
})
app.get('/world',secondHandler,(req,res)=>{
   res.send("Welcome to my world")
})
app.listen(port,()=>{
   console.log(`server running at http://localhost:${port}`)
})

// const express = require('express');

// const app = express();

// const port = 5000;

// const firstHandler = (req, res, next) => {
//     if (10 < 20) {
//         next();
//     } else {
//         res.status(403).send("Forbidden: Condition not met for /home");
//     }
// };

// const secondHandler = (req, res, next) => {
//     if (50 > 20) {
//         next(); 
//     } else {
//         res.status(403).send("Forbidden: Condition not met for /world");
//     }
// };

// app.get('/home', firstHandler, (req, res) => {
//     res.send("Welcome to my Home");
// });

// app.get('/world', secondHandler, (req, res) => {
//     res.send("Welcome to my World");
// });
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
