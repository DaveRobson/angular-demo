/**
 * webservice access object any functions dealing with
 * communication to webservices.
 *
 */

'use strict';

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('User',
	[
		'$resource',
		function($resource)
		{
			return $resource('/api/users', {},
				{
					list: { method:'GET', isArray: true}
				});
		}
	]
)

