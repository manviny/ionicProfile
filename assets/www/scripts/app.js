// This is a JavaScript file

angular.module('patrimonio24App',[
  'ngRoute',
  'ngResource',
  'ionic'
])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .otherwise({
        redirectTo: '/'
      });
  })  
;