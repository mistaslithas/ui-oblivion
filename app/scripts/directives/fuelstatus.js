'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:fuelStatus
 * @description
 * # fuelStatus
 */
angular.module('oblivionApp')
  .directive('fuelStatus', function () {
    return {
      templateUrl: 'templates/fuelStatus.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
