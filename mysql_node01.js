const mysql=require('mysql');

const db=mysql.createPool({
        host: '127.0.0.1',//数据库的ip地址
        user: 'root',//登录数据库的账号
        password: 'Meet1234',//登录数据库的密码
        database: 'new_1'//制定要操作的数据库
});

//添加users表中的数据

/*const user={username:'pacman',password:'pcc123',status:1};
const sqlnew='insert into users (username,password,status) values (?,?,?)';
//可以通过对？的使用来对sql语句进行占位符操作
db.query(sqlnew,[user.username,user.password,user.status],(err,reslut)=>{
    if(err) return console.log(err.message);//出现失败的结果时返回
    //reslut.affected Rows方法可以得知数据库的改变行数，并依据此来判断是否是完成该指令
    if(reslut.affectedRows == 1){
        console.log('插入数据成功');
    }
})*/

//修改users表中的数据
/*const user={username:'zwer',password:'113344',status:1};
const sqlup='update users set  username=?,password=?,status=?  where  id=1';
db.query(sqlup,[user.username,user.password,user.status],(err,reslut)=>{
    if(err) return console.log(err.message);
    if(reslut.affectedRows== 1){
        console.log('数据写入成功');
    }
})*/

const sqlde='delete from users where id=?';
db.query(sqlde,1,(err,result)=>{
    if(err)return console.log(err.message);
    if(result.affectedRows == 1){
        console.log('数据删除成功');
    }
})
//查询users表中的所有数据
const mysqlStr='select * from users';
db.query(mysqlStr,(err,reslut)=>{
    if(err) return console.log(err.message);
    console.log(reslut);
})