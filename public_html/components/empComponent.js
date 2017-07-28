empApp.component('empComponent', {
    templateUrl: 'components/empComponent.html',
    bindings : {
        data : '=',
        delete : '&',
        eidtItem : '&'
    },
    controller: function() {
        editEmp = function(index, emp){
            eidtItem(index, emp);
        };
    },
    controllerAs: "vm"
});