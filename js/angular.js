var app = angular.module('toDoList', [])

.controller('mainCtrl', function($scope, dataService) {

	$scope.addTask = function() {
		this.todos.push({});
	}

	dataService.getTodos(function(response) {
		console.log(response.data);
		return response.data;
	});
})

.service('dataService', function($http) {
	
	this.getTodos = fucntion(callback) {
		$http.get('js/data.json').then(callback);
	};
});
