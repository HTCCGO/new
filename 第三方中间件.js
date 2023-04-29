const express=require('express');
const parser=require('body-parser');
const app=express();

app.use(parser.urlencoded({extended:false}));
//第三方中间件
app.get('/users',(req,res)=>{
    console.log(req.body);
    res.send('ok');
 })

app.listen(80,()=>{
    console.log('express sever runing at http://127.0.0.1:80')
})