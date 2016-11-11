angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('login',{
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('signup',{
        url:'/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupController'
      })
      .state('verified',{
        url:'/verified',
        templateUrl: 'views/verified.html',
        controller: ''
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: '',
        authenticate: true
      })
      .state('forbidden',{
          url: '/forbidden',
          templateUrl: 'views/forbidden.html'

       })
    $urlRouterProvider.otherwise('login');

  }])
    //.run(['$rootScope', '$state',  function($rootScope, $state) {
     // $rootScope.$on('$stateChangeStart', function(event, next) {
   .run(['$rootScope', '$state', function ($rootScope, $state) {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    $rootScope.currentUser = user || null;
    $rootScope.$on('$stateChangeStart', function (event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('login');
      }
    });
  }]);












