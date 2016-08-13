
var InitCtrl = function InitCtrl ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $log.log("Testing toggle: ", open);
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
    $log.log("Finishing toggle: ", open);
  };

  //$scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
};

var app = angular.module('BaranOrnarliApp', ['ui.bootstrap']);

app.controller('InitCtrl', ['$scope', '$log', InitCtrl]);