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
				action: $resource('/api/users/:userId', {userId:'@userId'},
				{
					update: {method: 'PUT'}
				})

			}
		});

