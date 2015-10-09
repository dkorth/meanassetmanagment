'use strict';

describe('appItemsList factory', function() {
	var $rootScope ={}, appItemsList;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _appItemsList_) {
		$rootScope = _$rootScope_;
		appItemsList =_appItemsList_;
	}));
	
	// afterEach(function() {
	// });
	
	
	it('should save items', function() {
		var items =['one','two'];
		appItemsList.save(items);
		expect(appItemsList.items[0]).toBe('one');
	});
	
	it('should read items', function(){
		var items = appItemsList.read({});
		expect(items[0].title).toBe('one');
	});
	
	it('should read items with existing items', function(){
		appItemsList.items =['three', 'four'];
		var items =appItemsList.read({});
		expect(items[0]).toBe('three');
	})
});