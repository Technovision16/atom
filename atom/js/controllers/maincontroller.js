app.controller('land_ctrl', ['$scope', 'placement', 'maindata', function ($scope, placement, maindata) {

	//	fetching student data
	maindata.success(function (data) {
		$scope.details = data;

		console.log($scope.details);
	});
	placement.success(function (maindata) {
		$scope.placements = maindata;


	});



	angular.element(".login-modal").hide();
	$scope.login = function () {

		angular.element(".login-modal").fadeIn();

	}

	angular.element(".cross").click(function () {
		angular.element(".login-modal").fadeOut();
	});

	angular.element(".left").click(function () {
		angular.element(".horiz-scroll").animate({
			scrollLeft: "-=150"
		}, 400);
	});
	angular.element(".right").click(function () {
		angular.element(".horiz-scroll").animate({
			scrollLeft: "+=150"
		}, 400);
	});


}]);