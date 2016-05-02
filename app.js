(function () {
    'use strict';

    var ePortfolioApp = angular.module('ePortfolioApp', [
        'ui.router',
        'ngAnimate',
        'ngResource',
        'ui.bootstrap',
        'ui.keypress',
        'smart-table',
        'ngCookies',

        'ePortfolioApp.navigation'
    ])

    ePortfolioApp.config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/overview');

                $stateProvider
                    .state('app', {
                        abstract: true,
                        template: '<ui-view/>'
                    })
					.state('app.gui', {
                        abstract: true,
						views: {
							'@app': {
								templateUrl: 'shared/views/gui.html'
							},
							'navigation@app.gui': {
								templateUrl: 'components/navigation/navigation.html',
							},
							'content@app.gui': {
								template: '<ui-view />'
							}
						}
                    })
                    .state('app.gui.overview', {
                        url: '/overview',
                        templateUrl: 'components/homepage/homepage.html'
                    });

            }
        ]);
})();