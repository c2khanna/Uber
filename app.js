angular.module('myApp', ['ngMaterial'])
.controller('BodyController', function($element) {
	var vm = this;
	vm.questions = questions;
	vm.questionIndex = 0;
	vm.searchText = "";
	vm.nextButton = false;
	vm.querySearch = function (query) {
      	var results = cities.filter(function (c){
      		return c.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      	});
        return results;
    }
    vm.onNextButtonClick = function() {
    	$element.find(".city").css({
    		opacity: 0,
    		display: "none"
    	});
    	$element.find(".questions").css({
    		opacity: 1,
    		display: "block"
    	});
    }

    vm.onYesButtonClick = function(){
    	if(vm.questionIndex == vm.questions.length - 1) {
    		$element.find(".questions").css({
	    		opacity: 0,
	    		display: "none"
    		});
    		$element.find(".success").css({
	    		opacity: 1,
	    		display: "block"
    		});
    	}
    	else {
    		vm.questionIndex++;
    	}
    }

    vm.onNoButtonClick = function(){
    	$element.find(".questions").css({
	    		opacity: 0,
	    		display: "none"
    		});
    		$element.find(".fail").css({
	    		opacity: 1,
	    		display: "block"
    		});
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
