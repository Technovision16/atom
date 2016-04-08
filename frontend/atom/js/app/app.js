var app = angular.module('Atom', ['ngRoute']);


//configurations====

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/visual/1', {
		templateUrl: '/Socialcops-sachin/partials/visual1.html',
		controller: 'Visual1'
	}).
	when('/visual/2', {
		templateUrl: '/Socialcops-sachin/partials/visual2.html',
		controller: 'Visual2'
	}).
	when('/visual/3', {
		templateUrl: '/Socialcops-sachin/partials/visual3.html',
		controller: 'Visual3'
	}).
	otherwise({
		templateUrl: '/atom/js/partials/landing-page.html'
	});

}])