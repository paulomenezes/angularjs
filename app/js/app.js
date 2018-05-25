var angularTest = angular.module('angularTest', []);

angularTest.config([
  '$qProvider',
  function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }
]);

angularTest.controller('TesteController', function($scope) {
  $scope.title = 'Test';

  $scope.destinations = [];

  $scope.newDestination = {
    city: undefined,
    country: undefined
  };

  $scope.addDestination = () => {
    $scope.destinations.push({
      city: $scope.newDestination.city,
      country: $scope.newDestination.country
    });

    $scope.newDestination = {
      city: undefined,
      country: undefined
    };
  };
});
