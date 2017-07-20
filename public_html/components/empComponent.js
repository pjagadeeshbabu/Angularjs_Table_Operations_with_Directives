empApp.component('empComponent', {
    templateUrl: 'components/empComponent.html',
    bindings : {
        data : '=',
        delete : '&',
        eidtItem : '&'
    },
    controller: function() {

    },
    controllerAs: "vm"
});