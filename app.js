angular.module('myApp', ['ngMaterial'])
.controller('BodyController', function() {
	var vm = this;
	vm.searchText = "";
	vm.querySearch = function (query) {
      	var results = cities.filter(function (c){
      		return c.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      	});
        return results;
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