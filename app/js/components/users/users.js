(() => {
  angular.module('angularTest').controller('UsersController', function(Users) {
    var self = this;

    self.users = Users.all();
  });
})();
