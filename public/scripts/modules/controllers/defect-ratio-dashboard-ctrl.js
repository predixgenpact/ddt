define(['angular', '../sample-module/sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('DefectRatioDashboardCtrl', DefectRatioDashboardCtrl);
    DefectRatioDashboardCtrl.$inject = ['$scope'];

    function DefectRatioDashboardCtrl ($scope){
        $scope.dashboardHeaderData = {
            header: 'Defect Ratio Dashboard',
            list : [
                'Includes fundamental information regarding debrief defects',
                'Slicers are for filtering the defects based on region, LCT, modality and role',
                'See percentages of debrief defects in monthly basis, based on PAT requirements',
                'Find out most common problems in debriefs and specific deficiencies',
                'Make the problems visible, take action'
            ]
        };
    }
});