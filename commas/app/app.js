angular.module('kata', [])

.controller('ItemCtrl', function ($scope) {
  $scope.items = ['Alpha','Bravo','Charlie','Delta'];
})

.filter('commaSeparated', function() {
  return function() {
  };
})
