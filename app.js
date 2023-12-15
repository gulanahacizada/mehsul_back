const fs= require("fs")
// let a=[]
// fs.readFile('./data.json', 'utf8', (err,data)=>{
//     if(!err){
//       a=data;
//       console.log(a)
//     }else{
//         console.log(err)
//     }
// })
let a = [
    {"id":1 , "ad":"kitab", "miqdari":30 , "qiymet": "120 AZN"},
    {"id":2 , "ad":"defter", "miqdari":60 , "qiymet": "60 AZN"},
    {"id":3 , "ad":"qelem", "miqdari":60 , "qiymet": "30 AZN"},
    {"id":4 , "ad":"suluboya", "miqdari":35 , "qiymet": "105 AZN"},
    {"id":5 , "ad":"karandas", "miqdari":70 , "qiymet": "14 AZN"},
    {"id":6 , "ad":"qelemqabi", "miqdari":40 , "qiymet": "160 AZN"},
    {"id":7 , "ad":"xetkes", "miqdari":46 , "qiymet": "23 AZN"},
    {"id":8 , "ad":"pozan", "miqdari":30 , "qiymet": "15 AZN"},
    {"id":9 , "ad":"qayci", "miqdari":40 , "qiymet": "40 AZN"},
    {"id":10 , "ad":"albom", "miqdari":20 , "qiymet": "30 AZN"}
]
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Home page")
})
app.get('/thing',(req,res)=>{
    res.send(a)
})
app.get('/thing/:id',(req,res)=>{
    const id=req.params.id;
    const selected=a.find(b=>b.id==id)
    if(selected){
    res.send(selected)}
    else{
        res.status(404).send("Esya yoxdur.")
    }
})
app.listen(3000,()=>{
    console.log("server calisdi")
})