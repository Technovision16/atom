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
	when('/student', {
		templateUrl: '/atom/js/partials/student-portfolio.html'

	}).
	otherwise({
		templateUrl: '/atom/js/partials/landing-page.html'
	});

}])