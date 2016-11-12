var app = angular.module('toDoList', [])

.controller('mainCtrl', function($scope, dataService) {

	$scope.addTask = function() {
		this.todos.push({});
	}

	$scope.todos = dataService.getTodos();
})

.service('dataService', function($http) {
	this.getTodos = $http.get('js/data.json').then(function(response) {
		console.log(response.data);
		return response.data;
	})
})
