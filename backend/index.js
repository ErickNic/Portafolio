import express from "express";
const port = 3013 ||process.env.PORT;
const app =  express();
app.get('/',(req,res)=>{
    res.send('algo');
})

app.listen(port,()=>{
    console.log('portfolio backend is working')
})