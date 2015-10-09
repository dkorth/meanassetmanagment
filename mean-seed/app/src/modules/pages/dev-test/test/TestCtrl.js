'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', '$q', function ($scope, $timeout, appHttp, UserModel, $location, $q) {
	$scope.myImage = '';
	$scope.myCroppedImage = '';

	var handleFileSelect = function (evt) {
		var file = evt.currentTarget.files[0];
		var reader = new FileReader();
		reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
				$scope.myImage = evt.target.result;
            });
		};
		reader.readAsDataURL(file);
	};
	angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

	$scope.log = [];
	function logIt(text, params) {
		console.log('logIt: ' + text);
		$scope.log.push(text);
	}
	$scope.scopeOne = 'scope one11';

	$scope.$on('appMyDirectiveEvt1', function (evt, params) {
		logIt('controller $on event');
	});
	$scope.funcOne = function () {
		logIt('funcOne called');
	};

    $scope.myVar = 'var1';
	$scope.user = UserModel.load();

	$scope.swipeIt = function (evt, direction, params) {
		logIt('swipe: ' + direction);
	};

	$scope.tapIt = function (evt, params) {
		logIt('tap');
	};

	function sync(var1) {
		logIt('sync');
		return var1;
	}
	//var syncRet =sync(5);
	//console.log(syncRet);
	
	/*function asyncFunc(var1, callback){
		$timeout(function() {
				console.log('timeout finished');
				callback();
			}, 1000);
			console.log('timeout started');
	}*/
	/*asyncFunc(5,function(){
		console.log('async done');
	})
	console.log('ssdone');*/
	
	
	/*function asyncFuncPromise(var1){
		var deferred =$q.defer();
		$timeout(function() {
				console.log('ss timeout finished');
				deferred.resolve();
			}, 1000);
			console.log('projise timeout startede');
		return deferred.promise;
	}
	
	asyncFuncPromise(5)
	.then(function(){
		console.log('promise done')
	});*/

	$scope.$on('myEvt', function (evt, params) {
		logIt('on myEvt');
	});

	$scope.$broadcast('myEvt', {});
	$timeout(function () {
		$scope.$broadcast('myEvt', {});
	}, 1000);
}]);
