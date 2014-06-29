/**
 *
 * webservice access object (wsao) any functions dealing with
 * communication to webservices.
 *
 */

'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('User',
		function($resource)
		{
			return{
				list: $resource('/api/users', {},
				{
					query: { method: 'GET', isArray: true}
				}),
				read: $resource('/api/users/:userId', {},
				{
					query: { method: 'GET', params: {userId: '@userId'}}
				})
			}
		});

