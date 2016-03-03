myApp.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel) {


    angular.extend($scope, {
        doLogin: function(loginForm) {
            var data  = {
                email: $scope.login.username,
                password: $scope.login.password,
            };
            userModel.doLogin(data).then(function(){
                $location.path('/dashboard');
            });
        },
        doLogout: function() {
            userModel.doUserLogout();
            $location.path('/');
        }
    });
}]);
myApp.controller('globalController',['$scope', function($scope){

    $scope.global = {};
    $scope.global.navUrl = 'templates/partials/nav.html';
}]);
myApp.controller('navController',['$scope','userModel', function($scope,userModel){
    angular.extend($scope, {
            user: userModel.getUserObject(),
            navUrl: []
    });


}]);
//# sourceMappingURL=controllers.js.map
