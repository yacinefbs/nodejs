
const EventEmitter = require('events'); 

const Logger = require('./logger');
const logged = new Logger();

//Register a listener
logger.on('messageLogged', function(arg){ 
    console.log('Listener called', arg);
});

Logger.log('message');

//Raise: logging (data: message)    