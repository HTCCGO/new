//整理考试成绩
const fs = require('fs');

fs.readFile(__dirname + '/files/ok.txt', function (err, dataStr) {
    //判断是否读取成功
    if (err) {
        //当err的结果为ture证明我们没有读取成功,返回结果
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功:'+dataStr);
    const arrOld = dataStr.split('  ');
    //split函数作用：拆分字符串，通过制定的分隔符对字符串进行分割
    console.log(arrOld);
    const arrNew = []
    arrOld.array.forEach(item => {
        //数组的array对象下的forEach方法可以调用数组的每一个元素，并将元素传递给回调函数
        arrNew.push(item.replace('=', ','));
        //push函数：向当前数组添加一个或多个元素，并返回新的数组长度
        //replace函数：replace() 方法在字符串中搜索值或正则表达式。replace() 方法返回已替换值的新字符串。replace() 方法不会更改原始字符串。
        //这里用的是返回已替换的字符串
    });
})