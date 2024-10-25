
// const fs = require('fs')

// fs.readFile('index.txt','utf8',(err,data) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
const fs = require('fs')
fs.writeFile('sudheer.html','utf8',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('File created successfully')
})

// const fs=require('fs')
// //const samplecontent="My name is Sudheer,Iam creating file content"
// // fs.writeFile('example.html',samplecontent,(err)=>{
// //     if(err){
// //         console.log(err)
// //     }else{
// //         console.log("File content is success")
// //     }
// // })

// fs.rename('changedfile.js',"newchangedfile.js",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Modified success")
//     }
// })




