empApp.service("empService",  function(){

    var empData = [  
        {
            Id : 1,
            displayName : "Siva",
            status : "Permanent"
        },
        {
            Id : 2,
            displayName : "Narayana",
            status : "Temp"
        },
        {
            Id : 3,
            displayName : "Surya",
            status : "Permanent"
        },
        {
            Id : 4,
            displayName : "Venkata",
            status : "Permanent"
        },
        {
            Id : 5,
            displayName : "Rama",
            status : "Temp"
        }
    ]
	
    return {
        getEmpData : function () {
            return empData;
        }
    } 

        

});