var api = require('../api');

apiRoutes = function(router)
{
	//setup restful routes for user crud operations

	router.get('/api/users', api.users.list),
	router.get('/api/users/:userId', api.users.read),
	router.post('/api/users', api.users.create),
	router.put('/api/users/:userId', api.users.update),
	router.delete('/api/users/:userId', api.users.delete)
};

module.exports = apiRoutes;