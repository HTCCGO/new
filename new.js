var events =require('events');

var evenEmitter= new events.EventEmitter();

var connecthandler =function connected(){
    console.log("连接成功。");

    EventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
    console.log("数据传输成功。");
})

eventEmitter.emit("connection");
console.log("程序执行完毕");
