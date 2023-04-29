const express=require('express');

const app=express();

const mw=(req,res,next)=>{
    console.log('这是最简单的中间件函数');
    const time=Date.now();
    //获取时间，并赋值给req
    req.startTime=time;
    //将值赋予req,使得他能够在未来能被使用
    next();
    //将流转关系，转交给下一个中间件或者路由
}

 //app.use(mw);
 //注册全局生效的中间件函数

 //只在使用mw1时生效
 const mw1=(req,res,next)=>{
    console.log('调用局部生效的中间件');
 }
 
 app.get('/users',mw1,(req,res)=>{
    console.log('Home');
 })
app.listen(80,()=>{
    console.log('express sever runing at http://127.0.0.1:80')
})