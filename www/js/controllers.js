angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LogsCtrl', function($scope, Logs) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.logs = Logs.all();
  $scope.remove = function(log) {
    Logs.remove(log);
  }
})

.controller('LogDetailCtrl', function($scope, $stateParams, Logs) {
  $scope.log = Logs.get($stateParams.logID);
})

.controller('HelpCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});