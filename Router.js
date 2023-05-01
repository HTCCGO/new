//导入express模块
const express = require('express');

const router = express.Router();
router.get('/get', (req, res) => {
    //req.qutery 获取到客户端通过查询字符串，发送到服务器的数据
    const qutery = req.query;
    res.send({
        status: 0,       //状态，0是成功，1是失败
        msg: 'GET请求成功',//对状态的描述
        data: qutery  //需要响应给客户端的具体数据
    })
})
router.post('/post', (req, res) => {
    //re.body 获取客户端通过请求体，发送到服务器的URL-encoded数据
    const body = req.body;
    //利用send方法，让数据响应到客户端
    res.send({
        status: 0,  //状态，0是成功，1是失败
        msg: 'POST请求成功',
        data: body  //响应给客户端的的具体数据
    });
});
module.exports = router;