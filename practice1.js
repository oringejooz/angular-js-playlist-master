let myApp = angular.module('myApp',[]);
myApp.controller('myController',['$scope',function($scope){
    $scope.greet = "Good Evening";

    $scope.Ninjas = [
        {
            name : 'Swar',
            gender : 'F',
            rate : 50,
            available : true,
            belt : 'green',
        },
        {
            name : 'Aari',
            gender : 'M',
            rate : 80,
            available : true,
            belt : 'black',
        },
        {
            name : 'Max',
            gender : 'M',
            rate : 20,
            available : false,
            belt : 'blue',
        },
        {
            name : 'Leon',
            gender : 'M',
            rate : 40,
            available : true,
            belt : 'red',
        }
    ]

    $scope.removeNinja =(ninja)=>{
        let removed = $scope.Ninjas.indexOf(ninja)
        $scope.Ninjas.splice(removed,1);
    };

    $scope.addNinja = ()=>{
        $scope.Ninjas.push({
            name : $scope.newNinja.name,
            gender : $scope.newNinja.gender,
            belt : $scope.newNinja.belt,
            rate : parseInt($scope.newNinja.rate),
            available : true,
        })
        $scope.newNinja.name ="";
        $scope.newNinja.gender ="";
        $scope.newNinja.belt ="";
        $scope.newNinja.rate ="";
    };

}]);