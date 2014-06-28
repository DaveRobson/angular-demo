
/**
 * Module dependencies.
 */

var express = require('express'),
	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),

	//server url routing
	routes = require('./server/routes'),

	//api restful routes
	apiRoutes = require('./server/routes/api'),
	path = require('path');


var server = express();

var router = express.Router();


server.set('port', process.env.PORT || 3000);
server.set('views', __dirname + '/server/views');
server.set('view engine', 'jade');

server.use(morgan());
server.use(bodyParser());
server.use(methodOverride());
server.use(express.static(path.join(__dirname, '/client/public')));


server.get('/', routes.index);

apiRoutes(router);

server.use('/', router);


server.listen(server.get('port'), function(){
  console.log("Express server listening on port " + server.get('port'));
});
