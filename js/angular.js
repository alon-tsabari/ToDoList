var app = angular.module('toDoList', [])

.controller('mainCtrl', function($scope, dataService) {

	$scope.addTask = function() {
		this.todos.push({});
	}

	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.todos = response.data;
	});
	
	$scope.deleteTodo = function(todo, index) {
		this.todos.splice(index, 1);
	}
	
	$scope.saveTodo = function(todo) {
	}
})

.service('dataService', function($http) {
	
	this.getTodos = function(callback) {
		$http.get('js/data.json').then(callback);
	};
	
	
});
