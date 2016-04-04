angular.module('ePortfolioApp.navigation', []).directive('eportfolioNavigationDirective', function () {

var directive = {
		restrict: 'E',
		scope: {
		},
		templateUrl: 'components/navigation/navigation.html',
		controller: 'NavigationController'
	}
	
return directive;
}).controller('NavigationController',
	['$scope', '$sce',
		function ($scope, $sce) {
			
			
		}
	]);