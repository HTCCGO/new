//在一个自定义模块之中，module.exports的默认值为空
//向一个module.exports对象上挂载属性
const  age=20;
module.exports.username='zs';
module.exports.sayhellow=function(){
console.log('hello!');
}
//挂载对象的函数属性
module.exports.age=age;
//可以通过这种方法向外暴露该js内的对象