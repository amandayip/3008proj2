/* 'use strict';

angular.module('ColorApp')
    .controller('OtherpageController', function($scope, 'ColorAppService') {
        console.log("the page data: ");

        $scope.otherpage = function () {
            console.log($scope.data);
            otherpage: function (info) {
                return $http.post("/otherpage", info)
                    .then(function (res) {
                        return res;
                    }, function (err) {
                        return err;
                    });
            },

           
        }
    }); */