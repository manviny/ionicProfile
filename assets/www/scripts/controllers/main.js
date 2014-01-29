// This is a JavaScript file

'use strict';

/*
    Obtiene datos de configuracion de la app
    imagen de portada, datos para contactar...
*/
angular.module('patrimonio24App')
  .controller('MainCtrl', function ($scope) { 
        
       $scope.data = "you";
       
    });

angular.module('patrimonio24App')
  .controller('HomeTabCtrl', function ($scope) { 
        
  $scope.myTitle = 'Page One';

  $scope.leftButtons = [
    { 
      type: 'button-positive',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
      	alert("hi")
      }
    }
  ];
  $scope.rightButtons = [
    { 
      type: 'button-clear',
      content: 'Edit',
      tap: function(e) {
      }
    }
  ]
       
    });  