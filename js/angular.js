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
		dataService.deleteTodo();
		this.todos.splice(index, 1);
	}
	
	$scope.saveTodo = function(todo) {
		dataService.saveTodo();
	}
})

.service('dataService', function($http) {
	
	this.getTodos = function(callback) {
		$http.get('js/data.json').then(callback);
	};
	
	this.deleteTodo = function(todo) {
		console.log('Todo' + todo.name + ' has been deleted!');
	};
	
	this.saveTodo = function(todo) {
		console.log('Todo' + todo.name + ' has been saved!');
	}
});
