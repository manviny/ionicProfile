// This is a JavaScript file

'use strict';

/*
    Obtiene datos de configuracion de la app
    imagen de portada, datos para contactar...
*/
angular.module('patrimonio24App')

.controller('HomeTabCtrl', function($scope) {
	$scope.lista = [
		{name: 'milk'},
		{name: 'eggs'},
		{name: 'bread'},
		{name: 'ham'}
	];
  console.log('HomeTabCtrl');
});