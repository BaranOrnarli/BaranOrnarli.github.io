
var InitCtrl = function InitCtrl ($scope, $log, $uibModal, $sce) {
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
  $scope.animationsEnabled = true;

  $scope.toggleDropdown = function($event) {
    $log.log("Testing toggle: ", open);
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
    $log.log("Finishing toggle: ", open);
  };
  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/modal.html',
      controller: 'ModalInstanceCtrl'
    });

    modalInstance.result.then(function () {
        $log.info('Modal result at: ' + new Date());
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
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

app.controller('InitCtrl', ['$scope', '$log', '$uibModal', '$sce', InitCtrl]);
app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);