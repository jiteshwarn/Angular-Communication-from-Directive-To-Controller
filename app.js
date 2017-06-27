var app = angular.module("myApp", []);
app.controller("CheckBoxCount", function ($scope, countService) {
    $scope.UpdateCount = function () {
        $scope.msg = countService.count;
    }
});

app.directive("checkCount", function (countService) {
    return {
        link: function (scope, element, attr) {
         element.on("click", function () {
                countService.count = angular.element(document.querySelectorAll("input:checked")).length;
            })
        },
        restrict: "EA",
    }
});
app.factory("countService", function () {
    var countObj = {};
    return countObj;
});
