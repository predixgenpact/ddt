define(['angular', '../sample-module/sample-module','highcharts'], function(angular, sampleModule) {
    'use strict';

    sampleModule.directive('ddtDashboardHeader', ddtDashboardHeader);
    function ddtDashboardHeader () {
        return {
            restrict: 'AE',
            templateUrl: './views/defect-ratio-dashboard-header.html',
            scope: {
                data: "="
            },
            link: function(scope, element, attrs) {
            }
        };
    }
});
