const express = require('express');
const mongoDB = require('./db');


const app=express();
const port=8080
 
mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))



app.listen(port,()=>{
    console.log(`server is listening to port ${port}.....`);
})