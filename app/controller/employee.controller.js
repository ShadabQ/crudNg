var app = angular.module('empApp', ['EmployeeService']);

    app.controller('empCtrl', ['$scope','EmployeeService', function($scope,EmployeeService) {

      //Employee collection
      $scope.employee = [{
        fname:"Anil",
        lname:"Singh",
        email:"ac@xyz.com",
        age:23,
        gender:"M",
        dob:"12/06/99"

        }];

      //Delete Row
      $scope.delete = function(index) {
        EmployeeService.delete(index,$scope.employee);
        //TODO: Login for server call and remove data;
      }

      //Update Row
      $scope.update = function(index, data) {
        alert(JSON.stringify(data));
        //TODO: logic to render data on popups and update and set;
      }

      //Copy new Row
      $scope.copy = function(index, data) {
        var newRow = angular.copy(data);
        $scope.employee.push(newRow);
        //TODO: Logic for add new rows.
      }

      $scope.addEmployee = function(data) {
        alert(JSON.stringify(data));
        $scope.employee.push(data);
      }
    }]);


    app.controller('empAddCtrl', ['$scope','EmployeeService', function($scope,EmployeeService) {

      //Employee collection
      $scope.employee = [];

      

      $scope.addEmployee = function(data) {
        alert(JSON.stringify(data));
        $scope.employee.push(data);
      }
    }]);