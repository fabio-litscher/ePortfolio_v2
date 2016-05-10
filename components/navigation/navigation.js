angular.module('ePortfolioApp.navigation', []).directive('eportfolioNavigationDirective', function () {

var directive = {
		scope: {
		},
		templateUrl: 'components/navigation/navigation.html',
		controller: 'NavigationController',
		controllerAs: 'navigationController',
		bindToController: true
	}
	
return directive;
}).controller('NavigationController',
	['$scope',
		function ($scope) {
			var self = this;

			self.goto = goto;

			function goto(buttonLink) {
				$('body,html').animate({
					'scrollTop':   $('#' + buttonLink).offset().top
				}, 1000);
			}

		}
	]);