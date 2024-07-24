let myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/home',{
        templateUrl : 'views/home.html',
    })
    .when('/directory',{
        templateUrl : 'views/directory.html',
        controller : 'ninjaController',
    }).otherwise({
        redirectTo : '/home',
    });

}]);//fires before our application runs

myNinjaApp.run(function(){


});//fires while app runs





myNinjaApp.controller('ninjaController',['$scope',function($scope){
    //  $scope.message = "Hey Ya'll";
     //$scope.ninjas = ['yoshi','ryu','shaun','hattori']
     //FIlters change the display of how we output data
     $scope.ninjas = [{
        name : 'yoshi',
        belt : 'green',
        rate : 50,
        available : true,
        thumb : "content\\img\\ninja_img.png"
     },
    
     {
        name : 'ryu',
        belt : 'yellow',
        rate : 30,
        available : true,
        thumb : "content\\img\\ninja_img.png"
     },
     {
        name : 'hattori',
        belt : 'blue',
        rate : 100,
        available : true,
        thumb : "content\\img\\ninja_img.png"
     },
     {
        name : 'shaun',
        belt : 'black',
        rate : 1000,
        available : true,
        thumb : "content\\img\\ninja_img.png"
     }


    ];

    $scope.removeNinja = (ninja)=>{
        let remove = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(remove,1);
    };

    $scope.addNinja = ()=>{
        $scope.ninjas.push({
            name : $scope.newNinja.name,
            belt : $scope.newNinja.belt,
            rate : parseInt($scope.newNinja.rate),
            available : true,
        });
        $scope.newNinja.name = "";
        $scope.newNinja.belt ="";
        $scope.newNinja.rate ="";
    }

}]);

myNinjaApp.controller('divController',['$scope',function($scope){
    $scope.msg = "THis is a div controller";
}])

