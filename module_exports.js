//在一个自定义模块之中，module.exports的默认值为空
//向一个module.exports对象上挂载属性
const age = 20;
module.exports.username = 'zs';
module.exports.sayhellow = function () {
    console.log('hello!');
}
//挂载对象的函数属性
module.exports.age = age;
function zeroToTime(dataStr) {
    const data = new Date(dataStr);

    const year = padZero(data.getFullYear());
    const month = padZero(data.getMonth() + 1);
    const day = padZero(data.getDate());
    const hours = padZero(data.getHours());
    const min = padZero(data.getMinutes());
    const ss = padZero(data.getSeconds());
    //求出时间函数的对应的时间段
    return `${year}-${month}-${day}  ${hours}:${min}:${ss}`
}
function padZero(n) {
    return n > 9 ? n : '0' + n;
    //补零函数
}
//可以通过这种方法向外暴露该js内的对象
module.exports.zeroToTime = zeroToTime;
//暴露对象