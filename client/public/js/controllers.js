/**
 *
 * Middle-man functions controlling the way the data is gathered and
 * passed to the presentation layer.
 *
 * Two-way communication.
 *
 */

'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl',
	[
		'$scope',
		function($scope)
		{
			//blank for the initial home page
		}
	]
);

controllers.controller('UsersListCtrl',
	[
		'$scope',
		'User',
		function($scope, User)
		{
			$scope.users = User.action.query();
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
			$scope.userDetail = User.action.get({userId: $routeParams.id});

		}
	]
);

controllers.controller('UserDeleteCtrl',
	[
		'$scope',
		'$routeParams',
		'User',
		'$location',
		function($scope, $routeParams, User, $location)
		{
			$scope.userDetail = User.action.get({userId: $routeParams.id});

			$scope.deleteUser = function()
			{
				User.action.delete({userId: $routeParams.id},
					function()
					{
						$location.url('/users');
					});
			}

			$scope.cancelDelete = function()
			{

				$location.url('/users');
			}
		}
	]
);

controllers.controller('UserEditCtrl',
	[
		'$scope',
		'$routeParams',
		'User',
		'$location',
		function($scope, $routeParams, User, $location)
		{
			$scope.user = User.action.get({userId: $routeParams.id});
			
			$scope.editUser = function(user)
			{
				User.action.update({userId: $routeParams.id}, $scope.user,
					function()
					{
						$location.url('/users');
					});
			}
		}
	]
);

controllers.controller('UserCreateCtrl',
	[
		'$scope',
		'$routeParams',
		'User',
		'$location',
		function($scope, $routeParams, User, $location)
		{
			$scope.user = {};

			$scope.createUser = function()
			{
				User.action.save($scope.user,
					function()
					{
						$location.url('/users');
					});
			}
		}
	]
);

function HeaderController($scope, $location)
{
	$scope.isActive = function (viewLocation)
	{
		return viewLocation === $location.path();
	};
}