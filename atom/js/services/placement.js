app.factory('placement', ['$http', function ($http) {
	return $http.get('/atom/js/placement.json').success(function (main_data) {
			return main_data;
		})
		.error(function (err) {
			return err;
		});
}]);