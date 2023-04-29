const express = require('express');
const router=require('./luyou.js');

const app = express();

app.use(router);
//注册路由模块
app.get('/user', function (req, res) {
   res.send({ name: '张三', name: 20 });
})

app.post('/user', (req, res) => {
   res.send('请求成功');
})
//get和post方法的目的是为了监听get与post消息
//res。send方法的目的是为了将处理好的内容发送给客户端
app.get('/',(req,res)=>{
   console.log(req.query);
   res.send(req.query);
   //可以获取到客户端发来的查询参数，其中的id是指代的名称
   //默认情况下req.query是一个空对象
})

app.get('/user/:id',(req,res)=>{
   console.log(req.params);
   res.send(req.params);
})
//req.params是匹配到的URL参数
//默认是空对象
app.listen(80, () => {
   console.log('express sever runing at http://127.0.0.1:80')
})
