/**
 *
 * Middle-man functions controlling the way the data is gathered and
 * passed to the presentation layer.
 *
 */

'use strict';

var exposureControllers = angular.module('exposureControllers', []);

exposureControllers.controller('UserListCtrl',
	[
		'$scope',
		'UserServices',
		function($scope, UserList)
		{
			$scope.users = UserList.getUsers();
		}
	]
);