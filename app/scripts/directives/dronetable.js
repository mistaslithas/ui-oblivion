'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:droneTable
 * @description
 * # droneTable
 */
angular.module('oblivionApp')
  .directive('droneTable', function () {
    return {
      templateUrl: 'views/droneTable.html',
      restrict: 'E',
      link: function postLink(scope, element) {
      }
    };
  });