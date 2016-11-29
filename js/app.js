var app = angular.module('toDoList', []);
app.controller('ToDoController', function($scope) {
  $scope.toDos = [{
    name: "Prova de calculo",
    description: "Prova doprimeiro estagio sobre limites",
    completed: false
  }, {
    name: "Jogo de tenis",
    description: "Segundo jogo 8 torneio da UFCG",
    completed: false
  }];
});
