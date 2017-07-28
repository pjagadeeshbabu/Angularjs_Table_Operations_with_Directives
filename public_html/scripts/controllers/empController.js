empApp.controller('empController', ['$scope', 'empService',
	function($scope, empService) {
            
    $scope.Title = "Employee Operations";	
    $scope.empData = empService.getEmpData();
    
    $scope.empDirectiveData = angular.copy($scope.empData);
    $scope.empComponentData = angular.copy($scope.empData);

    $scope.editDirectiveEmp = function(index, emp) {
        alert("Edit" + emp.displayName);
    };
    
    $scope.deleteDirectiveEmp = function(index, emp) {
        alert("Deleted Employee : " + emp.displayName);
        $scope.empDirectiveData.splice(index, 1);
    };
    
    $scope.editComponentEmp = function(index, emp) {
        alert("Edit" + emp.displayName);
    };
    
    $scope.deleteComponentEmp = function(index, emp) {
        alert("Deleted Employee : " + emp.displayName);
        $scope.empComponentData.splice(index, 1);
    };
    
}]);