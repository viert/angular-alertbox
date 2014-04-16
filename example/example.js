angular.module('myApp', ['AlertBox', 'ngAnimate']).
controller('MainCtrl', [ '$scope', 'AlertService', function($scope, AlertService) {
    $scope.alertMe = function() {
        AlertService.Alert('Emergency!');
    };
    $scope.warnMe = function() {
        AlertService.Warning("It's a warning!");
    };
    $scope.noticeMe = function() {
        AlertService.Notice("A notice...");
    };
}]);
