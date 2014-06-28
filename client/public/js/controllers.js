/**
 * Created by David on 01/06/2014.
 *
 * Middle-man functions controlling the way the data to gathered and
 * passed to the presentation layer.
 *
 */

'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('UsersListCtrl',
	[
		'$scope',
		'User',
		function($scope, User)
		{
			$scope.users = User.list();
		}
	]
);