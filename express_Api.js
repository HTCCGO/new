//导入express模块
const express=require('express');
//导入Router模块
const router=require('./Router.js');
 
//创建一个express服务器实例
const app=express();
app.use('/api',router);
//启动web服务器
app.listen(80,()=>{
console.log('http://127.0.0.1:80');
})