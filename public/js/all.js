'use strict';
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);
myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/users/login.html',
            controller: 'userController'
        });
        $routeProvider.when('/dashboard', {
            templateUrl: 'templates/users/dashboard.html',
            controller: 'userController',
            authenticated: true,
        });
        // $routeProvider.when('/logout', {
        //     controller: 'userController',
        //     authenticated: true,
        // });
        $routeProvider.when('/logout', {resolve: {redirect: function($cookies,$location){
            $cookies.remove('auth');
            $location.path('/');
        }}});
        // configure html5 to get links working on jsfiddle
        $routeProvider.otherwise('/');
    }
]);
myApp.run(['$rootScope', '$location', 'userModel',
    function($rootScope, $location, userModel) {

        $rootScope.$on("$routeChangeStart", function(event, next, current) {

            if (next.$$route.authenticated) {

                if (!userModel.getAuthStatus()) {
                    $location.path('/');
                }
            }
            if (next.$$route.originalPath == '/') {
                console.log('Login page');
                if (userModel.getAuthStatus()) {
                    $location.path(current.$$route.originalPath);
                }
            }
        });
    }
]);
//# sourceMappingURL=all.js.map
