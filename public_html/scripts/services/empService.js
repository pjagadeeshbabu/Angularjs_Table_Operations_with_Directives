empApp.service("empService",  function(){

    var empData =
                [  
					{
						Id : 1,
						displayName : "Project",
						status : "complete"
					},
					{
						Id : 2,
						displayName : "Controllers",
						status : "complete"
					},
					{
						Id : 3,
						displayName : "Css",
						status : "complete"
					},
                    {
						Id : 4,
						displayName : "Services",
						status : "complete"
					},
                    {
						Id : 5,
						displayName : "Scripts",
						status : "incomplete"
					}
                ]
				
	
    return {
		getEmpData : function () {
            return empData;
        }
	} 

        

});