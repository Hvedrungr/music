angular.module('Music').directive('header', [
  function () {
    return {
      templateUrl: 'app/src/header/header.html',
      restrict: 'E',
      link: function ($scope, element) {
        /**
          Manage sidebar events
        **/
          var myElement = element[0].getElementsByTagName('nav')[0];

          $scope.openNav = function openNav() {
            myElement.style.width = '200px';
            myElement.style.display = "block";
          };

          $scope.closeNav = function closeNav() {
            myElement.style.display = "none";
          };
      }
    };
  }]
);
