const express=require('express');
const app=express();
const calculator=require("./calculator");

app.get("/sum",(req,res)=>{
var valor=calculator.add(parseInt(req.query.valor1),parseInt(req.query.valor2));
console.log(req.query);
res.send(JSON.stringify(valor));
})

module.exports=app;