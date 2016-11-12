var app = angular.module('toDoList', [])

.controller('mainCtrl', function($scope, dataServices) {

	$scope.addTask = function() {
		this.todos.push({});
	}

	$scope.todos = dataServices.getTodos();
})

.service('dataServices', function($http) {

	this.getTodos = $http.get('js/data.json').then(function(response) {
		console.log(response.data);
		return response.data;
	});
});