(() => {
  'use strict';

  angular.module('angularTest').factory('Pokemon', $http => {
    const API = 'http://pokeapi.co/api/v2/pokemon/';
    const Pokemon = {};

    Pokemon.findByName = name => {
      return $http
        .get(API + name)
        .then(res => res.data)
        .catch(res => res.data);
    };

    return Pokemon;
  });
})();
