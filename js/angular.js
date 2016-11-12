var app = angular.module('toDoList', [])

.controller('mainCtrl', function($scope, dataService) {

	$scope.addTask = function() {
		this.todos.push({"name": "Edit!"});
	}

	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.todos = response.data;
	});
	
	$scope.deleteTodo = function(todo, index) {
		dataService.deleteTodo(todo);
		this.todos.splice(index, 1);
	}
	
	$scope.saveTodo = function(todo) {
		dataService.saveTodo(todo);
	}
})

.service('dataService', function($http) {
	
	this.getTodos = function(callback) {
		$http.get('js/data.json').then(callback);
	};
	
	this.deleteTodo = function(todo) {
		console.log('The ToDo - ' + todo.name + ' has been deleted successfully!');
	}
			    
	this.saveTodo = function(todo) {
		console.log('The ToDo - ' + todo.name + ' has been saved successfully!');
	}
	
});
