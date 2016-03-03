myApp.controller('userController',['$scope','$http', function($scope,$http){
    angular.extend($scope, {
            doLogin: function (loginForm) {
              $http({
                headers : {
                    'Content-Type': 'application/json'
                },
                url : baseUrl + 'auth',
                method : 'POST',
                data : {
                    email : $scope.login.email,
                    password : $scope.login.password,
                }
              }).success(function(response){
                    console.log(response);
              });
            }
    });

}]);
myApp.controller('globalController',['$scope', function($scope){


}]);
//# sourceMappingURL=controller.js.map
