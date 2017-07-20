empApp.controller('empController', ['$scope', 'empService',
	function($scope, empService) {
	$scope.Title = "Employee Operations";	
	$scope.empData = empService.getEmpData();
        
    $scope.editEmp = function(emp) {
        alert("Edit" + emp.displayName);
    };
    
    $scope.deleteEmp = function(emp) {
        alert("Delete" + emp.displayName);
    };
}]);