describe('Users factory', () => {
  let Users;
  const userList = [{ id: 1, name: 'Paulo' }, { id: 2, name: 'Laura' }];
  const singleUser = { id: 2, name: 'Laura' };

  beforeEach(module('angularTest'));

  beforeEach(
    inject(_Users_ => {
      Users = _Users_;
    })
  );

  it('should exist', () => {
    expect(Users).toBeDefined();
  });

  describe('.all()', () => {
    it('should exist', () => {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', () => {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', () => {
    it('should exist', () => {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exist', () => {
      expect(Users.findById(2)).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', () => {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });
});
