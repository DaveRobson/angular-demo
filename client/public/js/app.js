'use strict';

var exposureApp = angular.module('exposureApp', ['ngRoute']);

exposureApp.config(['$routeProvider',
	function($routeProvider)
	{
		$routeProvider.when
		(
			'/users',
			{
				templateUrl: 'partials/users.html',
				controller: 'UsersListCtrl'
			}
		)
	}
]);
