/**
 *
 * Middle-man functions controlling the way the data is gathered and
 * passed to the presentation layer.
 *
 */

'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl',
	[
		'$scope',
		function($scope)
		{

		}
	]
);


controllers.controller('UsersListCtrl',
	[
		'$scope',
		'User',
		function($scope, User)
		{
			$scope.users = User.list.query();
		}
	]
);

controllers.controller('UserDetailCtrl',
	[
		'$scope',
		'$routeParams',
		'User',
		function($scope, $routeParams, User)
		{
			$scope.userDetail = User.read.query({userId: $routeParams.id});
		}
	]
);
