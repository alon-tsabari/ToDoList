var app = angular.module('toDoList', [])

.controller('mainCtrl', function($scope, dataService) {

	$scope.addTask = function() {
    var input = document.querySelector('[type="text"]');
    if(input.value === '') {
      $scope.todos.push({"name": "New Task"});
      console.log(this);
    }else {
      $scope.todos.push({"name": $scope.todo.name});
    }
		input.value = '';
		this.todo.name = '';
	}
  
  dataService.getTodos(function(response) {
      $scope.todos = response.data;
  });
  
  $scope.deleteTodo = function(todo, index) {
      dataService.deleteTodo(todo);
      this.todos.splice(index, 1);
  }
})

.service('dataService', function($http) {
	
  this.getTodos = function(callback) {
    $http.get('js/data.json').then(callback);
  };
  
  this.deleteTodo = function(todo) {
    console.log('The Todo - ' + todo.name + ' has been deleted!');
  }
});
