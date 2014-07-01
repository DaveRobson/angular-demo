/**
 *
 * webservice function dealing with all interaction with the user api.
 * $resource does all the work for use :).
 *
 */

'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('User',
		function($resource)
		{
			return{
				action: $resource('/api/users/:userId', {userId:'@userId'},
				{
					update: {method: 'PUT'}
				})

			}
		});

