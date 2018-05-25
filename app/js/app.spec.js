describe('App Controller', () => {
  const $scope = {};

  beforeEach(module('angularTest'));

  beforeEach(
    inject($controller => {
      $controller('TesteController', { $scope }); // Return the controller
    })
  );

  it('Should initialize the title in the scope', () => {
    expect($scope.title).toBeDefined();
    expect($scope.title).toEqual('Test');
  });

  it('Should add destination to destinations list', () => {
    expect($scope.destinations).toBeDefined();
    expect($scope.destinations.length).toBe(0);

    $scope.newDestination = {
      city: 'Recife',
      country: 'Brazil'
    };

    $scope.addDestination();

    expect($scope.destinations.length).toBe(1);
    expect($scope.destinations[0].city).toBe('Recife');
    expect($scope.destinations[0].country).toBe('Brazil');

    expect($scope.newDestination.city).toBeUndefined();
    expect($scope.newDestination.country).toBeUndefined();

    $scope.newDestination = {
      city: 'Frankfurt',
      country: 'Germany'
    };

    $scope.addDestination();

    expect($scope.destinations.length).toBe(2);
    expect($scope.destinations[1].city).toBe('Frankfurt');
    expect($scope.destinations[1].country).toBe('Germany');

    expect($scope.newDestination.city).toBeUndefined();
    expect($scope.newDestination.country).toBeUndefined();

    expect($scope.destinations[0].city).toBe('Recife');
    expect($scope.destinations[0].country).toBe('Brazil');
  });
});
