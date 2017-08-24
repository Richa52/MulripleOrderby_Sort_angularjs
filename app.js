var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $filter) {
 
  $scope.columns = ["name", "duedate", "DocketNumber", "Color"];

  $scope.employees = [{
    name: "David",
    duedate: "3/23/2016",
    DocketNumber: "2159.182EP01",
    Color: "Red"
  }, {
    name: "Harry",
    duedate: "2/19/2017",
    DocketNumber: "2159.403PC01",
    Color: "Yellow"
  }, {
    name: "Harry, Potter",
    duedate: "12/22/2015",
    DocketNumber: "2818.581PC01",
    Color: "Red"
  },{
    name: "Harry, Potter",
    duedate: "12/22/2015",
    DocketNumber: "2589.581PC01",
    Color: "Red"
  }, {
    name: "Kat, R",
    duedate: "12/22/2015",
    DocketNumber: "2943.034IE00",
    Color: "Green"
  }, {
    name: "Alena",
    duedate: "8/6/2016",
    DocketNumber: "9999.7090000",
    Color: "Pink"
  }];

  angular.forEach($scope.employees, function (value, idx) {
      if (value.duedate !== "")
      {
      value.duedate = new Date(value.duedate);
      $scope.employees.push(value.duedate);
      }
    });

  //Order by Due Date, then Docket Number, then Color
    var orderByExpression = ['-duedate','DocketNumber'];
    var reverse = false;
    $scope.employees = $filter('orderBy')($scope.employees, orderByExpression, reverse);
   

});
