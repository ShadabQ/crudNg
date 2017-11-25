var app = angular.module('EmployeeService', []);
 app.service("EmployeeService",function(){


      this.delete = function(index,employee) {
        
        return employee.splice(index, 1);
       
      }

     


 });