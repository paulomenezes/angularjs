(() => {
  'use strict';

  angular.module('angularTest').factory('Users', () => {
    const Users = {};
    const userList = [{ id: 1, name: 'Paulo' }, { id: 2, name: 'Laura' }];

    Users.all = () => {
      return userList;
    };

    Users.findById = id => {
      return userList.find(user => user.id === id);
    };

    return Users;
  });
})();
