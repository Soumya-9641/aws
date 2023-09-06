const events = require('events')

//instanciate an event emitter object
const eventEmitter = new events.EventEmitter();

//now event handler to handle the event

const eventHandler= function connected(){
    console.log("connected with event");

    //trigger the event
    eventEmitter.emit('data_recieved');
}

//bind the event with event handler 
eventEmitter.on("connection",eventHandler);

eventEmitter.on("data_recieved", function (){
        console.log("data tranfer successfully")
})
eventEmitter.emit("connection");
console.log("finish")

