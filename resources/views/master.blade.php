<!DOCTYPE html>
<html ng-app='myApp'>
<head>
    <meta charset="utf-8" />
    <title>Angular API Testing</title>
    <link rel="stylesheet" href="{{asset('bower_resources/bootstrap/dist/css/bootstrap.min.css')}}" />
    <script>var baseUrl = "{{url ('/')}}/"; </script>
</head>
<body>
<div class="container" ng-controller="globalController">
    <div ng-view></div>
</div>


<script src="{{asset('bower_resources/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('bower_resources/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<script src="{{asset('bower_resources/angular/angular.min.js')}}"></script>
<script src="{{asset('bower_resources/angular-route/angular-route.min.js')}}"></script>
<script src="{{asset('bower_resources/angular-cookies/angular-cookies.min.js')}}"></script>
<script src="{{url(elixir('js/all.js'))}}"></script>
<script src="{{url(elixir('js/controllers.js'))}}"></script>
<script src="{{url(elixir('js/models.js'))}}"></script>
</body>
</html>