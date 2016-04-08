app.factory('maindata', ['$http', function ($http) {
	return $http.get('/atom/js/jsonfile.json').success(function (main_data) {
			return main_data;
		})
		.error(function (err) {
			return err;
		});
}]);