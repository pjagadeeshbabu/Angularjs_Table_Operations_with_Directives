empApp.directive('empDirective', function() {
  return {
    restrict: 'EA',
    templateUrl: 'directives/empDirective.html',
    scope: {
        empData : '=',
        delete : '&',
        eidtItem : '&'
        
    }
  };
});