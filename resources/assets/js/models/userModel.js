myApp.factory('userModel', ['$http','$cookies', function($http,$cookies) {
    var userModel = {};
    userModel.doLogin =  function(loginForm) {
        return $http({
            headers: {
                'Content-Type': 'application/json'
            },
            url: baseUrl + 'auth',
            method: 'POST',
            data: {
                email: loginForm.email,
                password: loginForm.password,
            }
        }).success(function(response) {
            $cookies.put('auth',JSON.stringify(response));
            console.log(response);
        }).error(function(data, status, headers) {
            console.log(data, status, headers);
        });
    };

    userModel.getAuthStatus = function(){
        var status = $cookies.get('auth');
        if(status){
            return true;
        }else {
            return false;
        }
    };

    userModel.getUserObject = function(){
        var userObject  = angular.fromJson($cookies.get('auth'));
        return userObject;
    };

    userModel.doUserLogout = function(){

        $cookies.remove('auth');
    };

    return userModel;
}]);