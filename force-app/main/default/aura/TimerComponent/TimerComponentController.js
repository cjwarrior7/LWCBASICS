({
    changeMintues : function(component, event, helper) {
      var min =  component.get("v.mintues");
      if(min != null && min > 0){
       component.set("v.countmin", min - 1);
       component.set("v.countsec", 60);
      }


    },
    startTime: function(component, event, helper) {
        var min =  component.get("v.mintues");
        if(min != null && min > 0) {
            function countDownTimer(){
                var countsec   = component.get("v.countsec");
                console.log("countsec :",countsec);
                var countmin = component.get("v.countmin");
                console.log("countmin  :",countmin);
                if( countsec == 0 && countmin == 0 ){
                   alert("CountDown is Completed"); 
                   location.reload();
                }
                else if(countsec == 0 ) {
                    component.set("v.countmin",countmin - 1);
                    component.set("v.countsec",60);
                    console.log("countsec :",countsec);
                    console.log("countmin  :",countmin);
                }

                else{
                    component.set("v.countsec",countsec - 1);
                    console.log("countsec :",countsec);
                    console.log("countmin  :",countmin);
                }
            }
            setInterval(countDownTimer,1000)
        }
        else{
            alert("Please Enter Mintues"); 
        }

       
    },

})
