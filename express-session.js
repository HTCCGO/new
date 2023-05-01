const express = require('express');

const app = express();

const session = require('express-session');
//配置session中间件
app.use(session({
    secret: 'keyboard cat',//secret 的值可以为任意的字符串
    resave: false,//固定写法
    saveUninitialized: true//固定写法
}))

//托管静态代码
app.use(express.static('./pages'));

//解析post提交过来的表单数据
app.use(express.urlencoded({
    extended: false
}))

app.post('./api/login', (req, res) => {
    //判断用户提交的登录信息是否正确
    if (req.body.username != 'admin' || req.body.password != '00000') {
        return res.send({
            status: 1,
            msg: '登录失败'
        });
    }
    //将用户的信息，存储到session中
    req.session.user=req.body;
    req.session.islogin=true;

    //返回结果
    res.send({
        status:0,
        msg:'登陆成功'
    })
})

//退出登录的接口，用于清空服务器的session
app.post('.api/logout',(req,res)=>{
        //destroy的作用是清空当前客户端的session信息
        req.session.destroy();
        res.send({
            status:0,
            msg:'退出成功'
        })
})

