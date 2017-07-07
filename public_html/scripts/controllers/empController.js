empApp.controller('empController', ['$scope', 'empService',
	function($scope, empService) {
	$scope.Title = "Employee Operations";	
	$scope.empData = empService.getEmpData();
        
    $scope.editEmp = function() {
        alert("Edit");
    };
    
    $scope.deleteEmp = function() {
        alert("Delete");
    };
}]);