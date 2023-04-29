const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    throw new Error('服务器内部错误');
    console.log('Home');
})

//定义错误的中间件
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message);
    res.send('Error:' + err.message);
})
app.listen(80, () => {
    console.log('express sever runing at http://127.0.0.1:80')
})