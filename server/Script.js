const express = require("express");
const app =express();
require("./db/conn");
const port = 8003;


app.get("/",(req,res)=>{
  res.send("  server start ")
})

app.listen( port,()=>{

console.log("server start")


})
