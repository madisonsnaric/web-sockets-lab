let WebSocket = require('ws'); 

let wss = new WebSocket.Server({ port: 8080 }); 

wss.on('connection', (ws) => {
	ws.on('message', (message) => {
		console.log(`Received: ${message}`);
		ws.send(message);  
	});

	// setTimeout(() => {
	// 	ws.send('hello'); 
	// }, 2000); 
});  