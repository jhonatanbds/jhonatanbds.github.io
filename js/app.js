var app = angular.module('toDoList', []);
app.controller('ToDoController', function($scope) {
  
  $scope.toDos = [];
  
  $scope.toDosCompleted = function() {
	var count = 0;
	for (i = $scope.toDos.length - 1; i >= 0; i--) {
		if ($scope.toDos[i].completed) {
			count++;
		}
	}
	return count;
  };
  
  $scope.completedPerCent = function() {
	  return (100 * ($scope.toDosCompleted()/$scope.toDos.length)).toFixed(1);
  };
  
  $scope.addToDo = function() {
	if ($scope.newToDo == "")
		alert("Não");
	else
		$scope.toDos.push({name:$scope.newToDo, completed:false});
  };
  
  $scope.clear = function() {
    $scope.toDos = [];
  };
    
  $scope.clearCompleted = function() {	
	
	for (i = $scope.toDos.length - 1; i >= 0; i--) {
		if ($scope.toDos[i].completed) {
			$scope.toDos.splice(i, 1);
		}
	}
  };
  
  $scope.removeToDo = function(index) {
	
	$scope.toDos.splice(index, 1);
	
  };
  
  
  
});
