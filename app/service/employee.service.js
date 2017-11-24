var app = angular.module('EmployeeService', []);
 app.service("EmployeeService",function(){

//Delete Row
      this.delete = function(index,employee) {
        return employee.splice(index, 1);
        //TODO: Login for server call and remove data;
      }


 });