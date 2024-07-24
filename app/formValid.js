let formValid = angular.module('formValid',[]);

/*

Form CLasses

ng-pristine - applied to form or any input field not used yet
ng-dirty - for/input has been used; user enter something

ng-untouched - when input has not been touch. When form first loads
ng-touched - i/p has been touched. Click on the form input

ng-valid - when a form/input field is valid
ng-invalid - '' ''   invalid

Form Properties

$pristine -
$dirty -
$touched -
$untouched -
$valid -
$invalid -

*/

formValid.controller('FormController',['$scope',function($scope){
    $scope.contact = {};
}]);