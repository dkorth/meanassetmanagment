/**
*/

'use strict';

angular.module('myApp').controller('MyPageCtrl', ['$scope', 'appItemsList',
 function($scope, appItemsList) {
	 var items =appItemsList.load({});//[
		/*{
			title: 'one'
		},
		{
			title: 'two'
		},
		{
			title: 'three'
		},
		{
			title: 'four'
		}
	];*/
	appItemsList.save(items, {});
	$scope.items =appItemsList.load({});
	
}]);