/**
 * Created by David on 01/06/2014.
 *
 * webservice access object (wsao) any functions dealing with
 * communication to webservices.
 *
 */

'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('User',
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

