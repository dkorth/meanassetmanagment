'use strict';

describe('appMyDirective', function() {
	var elm, elmScope, $scope, $compile, $timeout;
	
	beforeEach(module('myApp'));
	
	/**
	@param params
		@param {String} html
	*/
	var createElm =function(params) {
		var html ="<div app-my-directive>"+
		"</div>";
		if(params.html) {
			html =params.html;
		}
		// elm =angular.element(html);
		elm =$compile(html)($scope);
		// $scope.$digest();
		$scope.$apply();		//NOTE: required otherwise the alert directive won't be compiled!!!! ... wtf?
		elmScope =elm.isolateScope();
		var elements ={
			// 'somePart':elm.find('div').children().find('div')
		};
		return elements;
	};
	
	beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_) {
		$compile = _$compile_;
		$timeout = _$timeout_;
		$scope = _$rootScope_.$new();
	}));
	
	// afterEach(function() {
	// });
	
	it('should a scopeOne propoerty', function() {
		$scope.scopeOne = 'test scope one';
		var html = "<div app-my-directive scope-one='scopeOne'></div>"
		createElm({html:html});
		expect(elmScope.scopeOne).toBe('test scope one');
	});
});