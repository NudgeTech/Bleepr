angular
  .module('app')
  .factory('authService', ['BleeprUser', '$q', '$rootScope', function(BleeprUser, $q,
      $rootScope) {
    function login(email, password) {
      return BleeprUser
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id
          };
        });
    }

    function logout() {
      return BleeprUser
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function signup(firstname, lastname, companyname, email, password) {
      return BleeprUser
        .create({
         firstName: firstname,
         lastName: lastname,
         companyName: companyname,
         email: email,
         password: password
       })
       .$promise
       .then(function(){
            //do stuff on register.
       });
    }

    return {
      login: login,
      logout: logout,
      signup: signup
    };
  }]);

