
/**
 * Module dependencies.
 */

var express = require('express'),
	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');


var server = express();



server.set('port', process.env.PORT || 3000);
server.set('views', __dirname + '/server/views');
server.set('view engine', 'jade');

server.use(morgan());
server.use(bodyParser());
server.use(methodOverride());
server.use(express.static(path.join(__dirname, '/client/public')));


server.get('/', 'index');


http.createServer(server).listen(server.get('port'), function(){
  console.log("Express server listening on port " + server.get('port'));
});
