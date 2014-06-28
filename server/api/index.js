/*
 * Expose all api endpoints in one file and load that file in the
 * server.js
 */

users = require('./users');

module.exports =
{
	//Api endpoints
	users: users
};
