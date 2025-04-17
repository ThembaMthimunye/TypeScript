// console.log('Hello, world!');
import  express from "express";
import config from "config";
import connect from "./connect/connect";

const port = config.get<number>("port");

const app=express()

 app.listen(port,()=>{
    console.log("Server is running on port 8000");
     connect()
})

// KkuUscUACROCUhsu
// mongodb+srv://218634567:KkuUscUACROCUhsu@cluster0.fuvfg65.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0