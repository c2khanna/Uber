angular.module('myApp', ['ngMaterial'])
.controller('BodyController', function($element) {
	var vm = this;
	vm.searchText = "";
	vm.nextButton = false;
	vm.querySearch = function (query) {
      	var results = cities.filter(function (c){
      		return c.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      	});
        return results;
    }

    vm.selectedItemChange = function (item){
    	vm.nextButton = item != null;
    }
})
.directive('ubBody', function () {
	return {
		restrict: 'E',
		controller: 'BodyController',
		controllerAs: 'vm',
		templateUrl: 'body.html'
	};
})