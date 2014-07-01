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
			'/user/:id',
			{
				templateUrl: 'partials/userDetail',
				controller: 'UserDetailCtrl'
			}
		).when
		(
			'/userDelete/:id',
			{
				templateUrl: 'partials/userDelete',
				controller: 'UserDeleteCtrl'
			}
		).when
		(
			'/userCreate/',
			{
				templateUrl: 'partials/userCreate',
				controller: 'UserCreateCtrl'
			}
		)
		.otherwise(
		{
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);//needed for express redirect
	}
]);
