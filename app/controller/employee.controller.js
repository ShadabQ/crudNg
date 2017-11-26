var app = angular.module('empApp', ['EmployeeService']);

    app.controller('empCtrl', ['$scope','EmployeeService', function($scope,EmployeeService) {

      $scope.save=true;
      
      //Employee collection
      $scope.employees = [{
        id:1,
        fname:"Anil",
        lname:"Singh",
        email:"ac@xyz.com",
        age:23,
        gender:"M",
        dob:"12/06/99"

        },
        {
        id:2,
        fname:"Shruthi",
        lname:"T",
        email:"ac@xyz.com",
        age:23,
        gender:"F",
        dob:"12/06/99"

        }
        ];

      $scope.count=$scope.employees.length+1;
      //Delete Row
      
      $scope.delete = function(index) {
      
        if(confirm("Are you sure you want to delete?")==true)
        EmployeeService.delete(index,$scope.employees);
      
      }
        
      

       $scope.cancel = function() {
        
        $scope.save=true;
        $scope.empl={};
      }
      //Update Row
      $scope.edit = function(index, data) {
        $scope.empl={};
        $scope.save=false;
        $scope.empl.id=data.id;
        $scope.empl.fname=data.fname;
        $scope.empl.lname=data.lname;
        $scope.empl.email=data.email;
        $scope.empl.age=data.age;
        $scope.empl.gender=data.gender;
        $scope.empl.dob=data.dob;
      }


      $scope.updateEmployee = function(data) {
       //alert(JSON.stringify(data));
        angular.forEach($scope.employees,function(key,value){
          if(key.id==data.id)
          {
        key.fname=data.fname;
        key.lname=data.lname;
        key.email=data.email;
        key.age=data.age;
        key.gender=data.gender;
        key.dob=data.dob;
          }
        });
      } 
      

      $scope.addEmployee = function(data) {

        $scope.employees.push({
        id: $scope.count,
        fname: $scope.empl.fname,
        lname:$scope.empl.lname,
        email:$scope.empl.email,
        age:$scope.empl.age,
        gender:$scope.empl.gender,
        dob:$scope.empl.dob
        });
        $scope.count++;
      }
      
      $scope.Display = function(letters){
        switch(letters){

        case 'A-E':
        $scope.employees=$scope.employees.filter(function(word){
          return /^(A|B|C|D|E)/.test(word.lname.toUpperCase());
        })
        break;
        case 'F-J':
        $scope.employees=$scope.employees.filter(function(word){
          return /^(F|G|H|I|J)/.test(word.lname.toUpperCase());
        })
        break;
        case 'K-O':
        $scope.employees=$scope.employees.filter(function(word){
          return /^(K|L|M|N|O)/.test(word.lname.toUpperCase());
        })
        break;
        case 'P-T':
        $scope.employees=$scope.employees.filter(function(word){
          return /^(P|Q|R|S|T)/.test(word.lname.toUpperCase());
        })
        break;
        case 'U-Z':
        $scope.employees=$scope.employees.filter(function(word){
          return /^(U|V|W|X|Y|Z)/.test(word.lname.toUpperCase());
        })
        break;
        };
        
       }
      
      
    }]);

app.directive('indices',function(){

var directive={};
directive.restrict='E';
directive.controller='empCtrl';
directive.template=`<span>
  &nbsp;|&nbsp;<a href="#" data-ng-click='Display("A-E")'>A-E</a>
  &nbsp;|&nbsp;<a href="#" data-ng-click='Display("F-J")'>F-J</a>
  &nbsp;|&nbsp;<a href="#" data-ng-click='Display("K-O")'>K-O</a>
  &nbsp;|&nbsp;<a href="#" data-ng-click='Display("P-T")'>P-T</a>
  &nbsp;|&nbsp;<a href="#" data-ng-click='Display("U-Z")'>U-Z</a>
</span>`;
return directive;
});

    
