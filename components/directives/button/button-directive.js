'use strict';

angular.module('ePortfolioApp.button-directive', []).directive('eportfolioButtonDirective', function () {
    return {
        templateUrl: 'components/directives/button/button-directive.html',
        controller: 'ButtonDirectiveController',
        controllerAs: 'buttonDirectiveController',
        bindToController: true,
        scope: {
            buttonLink: '='
        }
    };
}).controller('ButtonDirectiveController',
    ['$scope',
        function ($scope) {
            var self = this;

            self.goto = goto;

            function goto() {
                $(document.body).animate({
                    'scrollTop':   $('#' + self.buttonLink).offset().top
                }, 1000);
            }

        }
    ]);