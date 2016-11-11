angular
  .module('app')
  .controller('LoginController', ['$scope', 'authService', '$state',
        function($scope, authService, $state) {

                  $scope.login = function() {
                    authService.login($scope.bleepruser.email, $scope.bleepruser.password)
                      .then(function() {
                        $state.go('dashboard');
                      });
                  };
    }])
  .controller('SignupController', ['$scope', 'authService', '$state',
        function($scope, authService, $state) {

                  $scope.signup = function() {
                    authService.signup(
                          $scope.bleepruser.firstname, 
                          $scope.bleepruser.lastname,
                          $scope.bleepruser.companyname, 
                          $scope.bleepruser.email, 
                          $scope.bleepruser.password)
                      .then(function() {
                        $state.go('dashboard');
                      });
                  };
    }]);