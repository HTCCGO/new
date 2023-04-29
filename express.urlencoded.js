//导入express模块
const express = require('express');
//导入第三方中间件
const qs=require('./module.express.js');
const bodyParser = require('./module.express.js');

const app=express();

//注册第三方的中间件
app.use(bodyParser);

app.post('/user', (req, res) => {
    console.log(req.body);
})

//启动web服务器
app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})