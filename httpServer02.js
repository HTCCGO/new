const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    const reqUrl = req.url;
    let content = '<h1>404 Not Found</h1>'
    //设置默认内容为“404”
    if (reqUrl === '/' || reqUrl === '/index.html') {
        content = '<h1>网站首页</h1>'
    } else if (reqUrl === '/about.html') {
        content = '<h1>关于网站</h1>'
    }
    //判断发送的网址地址，得到不同的回答
     //设置返回的数据的格式为utf-8格式
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(content);
})
server.listen(80, () => {
    console.log('http server runing at http://127.0.0.1:80');
    //这是在终端显示的
})