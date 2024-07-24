let myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope',function($scope){
    $scope.message = "This is a message";
    $scope.counter = 0;
    $scope.myUpdateFunction = ()=>{
        $scope.counter++;
        $scope.message = "The message was updated";
        console.log($scope.message); 
    }
}])