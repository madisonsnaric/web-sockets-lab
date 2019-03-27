let connection = new WebSocket('ws://localhost:8080'); 

connection.onopen = () => {
	console.log('connected from the frontend');

	// connection.send('hello');  
}; 

connection.onerror = () => {
	console.log('failed to connect from the frontend'); 
}; 

connection.onmessage = (event) => {
	console.log('received message', event);
	document.querySelector('#document').value = event.data;  
}; 

document.querySelector('#document').addEventListener('input', (event) => {
	console.log('received message')

	let message = document.querySelector('#document').innerHTML; 
	console.log(message); 
	connection.send(message); 
}); 





// connection.onmessage = (event) => {
// 	console.log('received message', event.data);
// 	let li = document.createElement('li');
// 	li.innerText = event.data;
// 	document.querySelector('div').append(li);  
// }; 

// document.querySelector('div').addEventListener('keyup', (event) => {
// 	event.preventDefault(); 

// 	let message = document.querySelector('div').value; 
// 	connection.send(message); 
// 	document.querySelector('div').value = '';  
// }); 