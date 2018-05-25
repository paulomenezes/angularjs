describe('Pokemon Factory', () => {
  let Pokemon, $q, $httpBackend;

  // Add Pokeapi endpoint
  const API = 'http://pokeapi.co/api/v2/pokemon/';

  // Add mocked Pokéapi response
  const RESPONSE_SUCCESS = {
    id: 25,
    name: 'pikachu',
    sprites: {
      front_default: 'http://pokeapi.co/media/sprites/pokemon/25.png'
    },
    types: [
      {
        type: { name: 'electric' }
      }
    ]
  };

  const RESPONSE_ERROR = {
    detail: 'Not found.'
  };

  beforeEach(module('angularTest'));

  beforeEach(
    inject((_Pokemon_, _$q_, _$httpBackend_) => {
      Pokemon = _Pokemon_;
      $q = _$q_;
      $httpBackend = _$httpBackend_;
    })
  );

  it('should exist', () => {
    expect(Pokemon).toBeDefined();
  });

  describe('findByName()', () => {
    let result;

    beforeEach(() => {
      result = {};

      // Spy on our service call but allow it to continue to its implementation
      spyOn(Pokemon, 'findByName').and.callThrough();
    });

    it('should return a Pokemon when called with a valid name', () => {
      const search = 'pikachu';

      $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

      expect(Pokemon.findByName).not.toHaveBeenCalled();
      expect(result).toEqual({});

      Pokemon.findByName(search).then(res => {
        result = res;
      });

      $httpBackend.flush();

      expect(Pokemon.findByName).toHaveBeenCalledWith(search);
      expect(result.id).toEqual(25);
      expect(result.name).toEqual('pikachu');
      expect(result.sprites.front_default).toContain('.png');
      expect(result.types[0].type.name).toEqual('electric');
    });

    it('should return a 404 when called with an invalid name', () => {
      const search = 'godzilla';

      $httpBackend.whenGET(API + search).respond(404, $q.reject(RESPONSE_ERROR));

      expect(Pokemon.findByName).not.toHaveBeenCalled();
      expect(result).toEqual({});

      Pokemon.findByName(search).catch(res => {
        result = res;
      });

      $httpBackend.flush();

      expect(Pokemon.findByName).toHaveBeenCalledWith(search);
      expect(result.detail).toEqual('Not found.');
    });
  });
});
