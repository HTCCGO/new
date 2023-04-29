//导入querystring
const querystring = require('querystring');

function bodyParser(req, res, next){
    //定义变量，存储客户端发送的请求体数据
    let str = '';
    //监听req的data数据
    req.on('data', (chunk) => {
        str += chunk;
    })

    //监听req的end数据，当数据接收完毕后，自动触发req的end事件
    req.on('end', () => {
        //TODD：将字符串格式的请求体数据，解析成对象格式
        //console.log(str);
        const body = querystring.parse(str);
        req.body = body;
        next();
    })
};
module.exports=bodyParser;