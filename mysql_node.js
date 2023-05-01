//导入express模块
const express = require('express');

//导入mysql模块
const mysql = require('mysql');

//初始化mysql配置
const dp = mysql.createPool({
    host: '127.0.0.1',//数据库的ip地址
    user: 'root',//登录数据库的账号
    password: 'Meet1234',//登录数据库的密码
    database: 'new_1'//制定要操作的数据库
});

//检测sql是否能正确工作，返回值有err和result两个结果
dp.query('select 1', (err, result) => {
    if (err) return console.log(err.message);
    console.log(result);
})
//创建一个express服务器实例
const app = express();
