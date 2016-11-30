var app = angular.module('toDoList', []);
app.controller('ToDoController', function($scope) {
  $scope.toDos = [];
  $scope.addToDo = function() {
    $scope.toDos.push({name:$scope.newToDo, completed:false});
  };
  $scope.clear = function() {
    $scope.toDos = [];
  };
  $scope.clearCompleted = function() {
    $scope.toDos = _.filter($scope.toDos, function(toDo) {
      return !toDo.completed;
    })
  };
});
