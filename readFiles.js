const  fs=require("fs");
//加载fs模块

fs.readFile('./files/11.txt','utf-8',function(err,dataStr){
    console.log(err);
    console.log('......');
    console.log(dataStr);
})
//利用相对路径来进行选择，含义为读取文件的内容，最后的结果为在文件读取完毕后的返回结果
fs.writeFile('./files/22.txt','qwer','utf-8',function(err){
console.log(err);
})
//当文件写入成功之后，由于err的值为null，所以会显示的值为null，代表写入成功
fs.readFile('./files/22.txt','utf-8',function(err,dataStr){
    console.log(err);
    console.log('......');
    console.log(dataStr);
})