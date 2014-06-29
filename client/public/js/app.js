'use strict';

var demoApp = angular.module('demoApp', [
	'ngRoute',
	'controllers',
	'services',
	'ui.bootstrap'
	]);

demoApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider)
	{
		$routeProvider.when
		(
			'/',
			{
				templateUrl: 'partials/index',
				controller: 'IndexCtrl'
			}
		)
		.when
		(
			'/users',
			{
				templateUrl: 'partials/users',
				controller: 'UsersListCtrl'
			}
		)
		.when
		(
			'/users/:id',
			{
				templateUrl: 'partials/userDetail',
				controller: 'UserDetailCtrl'
			}
		).when
		(
			'/users/delete/:id',
			{
				templateUrl: 'partials/userDelete',
				controller: 'UserDeleteCtrl'
			}
		)
		.otherwise(
		{
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	}
]);
