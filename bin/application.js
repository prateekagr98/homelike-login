'use strict';

require('babel-register');

let express 			= require('express');
let morgan 				= require('morgan');
let path  				= require('path');

let server = express();

let port = 5555;

if(process.env.PORT){
	port = process.env.PORT;
}

server.use(morgan('dev'));

server.use('/assets', express.static('build'));

server.use('/public', express.static('public'));

server.use('/', function(req, res, next){
	res.sendFile(path.normalize(__dirname + '/../app/index.html'));
});

server.listen(port, function(){
	console.log('\nListening on port ' + port);
});