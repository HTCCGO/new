var express=require('express');

var router=express.Router();
//创建路由对象
router.get('/user',(req,res)=>{
    res.send('Get user list');
})

router.post('/user',(req,res)=>{
    res.send('Add new user');
})

//挂载获取用户列表的路由和添加用户的路由

module.exports=router;
//向外暴露路由对象