const EventEmitter = require('events');


const customEmitter = new EventEmitter();


//customEmitter.emit('response')

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} and id : ${id}`);
});

customEmitter.on('response',()=>{
    console.log(`data recieved 2`);
});

customEmitter.emit('response','mahmoud',1)