
var InitCtrl = function InitCtrl ($scope, $log, $uibModal) {

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };
  $scope.animationsEnabled = true;

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modal.html',
      size: 'lg',
      controller: 'ModalInstanceCtrl'
    });
  };


  //$scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
};

var ModalInstanceCtrl = function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};

var app = angular.module('BaranOrnarliApp', ['ui.bootstrap', 'ngAnimate']);

app.controller('InitCtrl', ['$scope', '$log', '$uibModal', InitCtrl]);
app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);