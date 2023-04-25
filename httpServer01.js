const http=require('http');
//导入http模块
const Server=http.createServer();
//创建服务器实例
Server.on('request',(req,res)=>{
//req是请求对象，包括了与客户端有关的数据和属性
    console.log('some visit our web Server');
    const url=req.url;
    //这是客户端请求的网络地址
    const method=req.method;
    //这是客户端请求的method类型
    const str=`your request url is ${url} ,and request method is ${method}`;
    console.log(str);
    res.end(str);
})
//为服务器绑定request事件
Server.listen(80,()=>{
console.log('http server runing at http://127.0.0.1:80');
})
//启动web服务器