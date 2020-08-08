$(document).ready(function() {

$(document).ready(function(){
   $('select').formSelect(); 
});

  $(document).on("click", "#logout_button", function() {    //destroying session on logging out
    $.ajax
    ({
            type: "POST",
            async: false,
            url: "php/destroy_session.php",
            data: {
                'mydata': "",
            },
            success: function(result)
             {

                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);

                console.log(result);
                if(result.msg=="session destroyed")
                {
                    window.location="index.html";
                }
            }
    });
  });

   

    var tabledata = "";
    var traveller_data = "";
    var data = {};
    var type = "send data";
    data['type'] = type;
    console.log(data);
    data = JSON.stringify(data);
    var passengers;
    var retdate;


    $.ajax({
        type: "POST",
        async: false,
        url: "php/retrievesession.php",
        data: {
            'mydata': "",
        },
        success: function(result) {

                    //  console.log(result);
                    result = result.trim();
                    result = result.substring(1, result.length - 1);
                    result = JSON.parse(result);
                    var source = result.source;
                    var destination = result.destination;
                    var stops = result.stops;
                    var flight = result.flight;
                    var duration = result.duration;
                    var arrtime = result.arrtime;
                    var deptime = result.deptime;
                    var fare = result.fare;
                    passengers = result.passengers;
                    retdate=result.returndate;


                    var passengers_return = result.passengers_return;
                    var source_return = result.source_return;
                    var destination_return = result.destination_return;
                    var stops_return = result.stops_return;
                    var flight_return = result.flight_return;
                    var duration_return = result.duration_return;
                    var arrtime_return = result.arrtime_return;
                    var deptime_return = result.deptime_return;
                    var fare_return = result.fare_return;
                    var passengers_return = result.passengers_return;
                    var type = result.returndate;
                    if (type !="") 
                    {
                        tabledata = '<div class="row" > <div class="col s12 m12 l10 offset-l1"> <div class="card-panel whie"> <span class="black-text"> <div class="row row1" style="padding:-15px"> <div class="col s2"> <img id="flight_name" src="' + flight + '" > </div><div class="col s2"> <div class="src_dest">' + source + '</div><div class="timings">' + deptime + '</div></div><div class="col s3"> <p class="duration">' + duration + '</p><p style="font-size:10px;margin-top:-10px;">' + stops + ' stops</p></div><div class="col s2"> <div class="src_dest">' + destination + '</div><div class="timings">' + arrtime + '</div></div><div class="col s3"> <div class="fare">' + fare + '/-</div></div></div></span> </div></div></div><div class="row row1"> <div class="col s12 m12 l10 offset-l1"> <div class="card-panel white"> <span class="black-text"> <div class="row row1"> <div class="col s2"> <img id="flight_name" src="' + flight_return + '" > </div><div class="col s2"> <div class="src_dest">' + source_return + '</div><div class="timings">' + deptime_return + '</div></div><div class="col s3"> <p class="duration">' + duration_return + '</p><p style="font-size:10px;margin-top:-10px;">' + stops_return + ' stops</p></div><div class="col s2"> <div class="src_dest">' + destination_return + '</div><div class="timings">' + arrtime_return + '</div></div><div class="col s3"> <div class="fare">' + fare_return + '/-</div></div></span> </div></div></div>';
                    } else
                     {


                        tabledata = '<div class="row"> <div class="col s12 m12 l10 offset-l1"> <div class="card-panel whie"> <span class="black-text"> <div class="row row1" style="padding:-15px"> <div class="col s2"> <img id="flight_name" src="' + flight + '"> </div><div class="col s2"> <div class="src_dest">' + source + '</div><div class="timings">' + deptime + '</div></div><div class="col s3"> <p class="duration">' + duration + '</p><p style="font-size:10px;margin-top:-10px;">' + stops + ' stops</p></div><div class="col s2"> <div class="src_dest">' + destination + '</div><div class="timings">' + arrtime + '</div></div><div class="col s3"> <div class="fare">' + fare + '/-</div></div></div></span> </div></div></div>';

                    }
                    traveller_data = '<div class="container">';
                    for (var i = 0; i < passengers; i++)
                     {

                        traveller_data = traveller_data + '<p style="color:white;background-color: #06243a;width:auto;font-size:20px;padding:5px;">Adult ' + (i + 1) + '</p><div class="row"> <div class="col s12 m12 l10 offset-l1"> <div class="card-panel" style="border:1px solid black"> <div class="row row1"> <div class="input-field col s6 l2"> <select id="title' + i + '"> <option value="" disabled selected>Title</option> <option value="Ms. ">Ms.</option> <option value="Mrs. ">Mrs.</option> <option value="Mr. ">Mr.</option> </select> </div><div class="input-field col s6 l4"> <input id="first_name' + i + '" type="text" required> <label for="first_name">First Name</label> </div><div class="input-field col s6 l4"> <input id="last_name' + i + '" type="text" required> <label for="last_name">Last Name</label> </div></div></div></div></div>';
                    }
                    traveller_data = traveller_data + '<div class="row"> <div class="col s6 offset-s3 l4 offset-l4"><a class="waves-effect waves-light btn" style="background-color:#06243a" id="pay"><i class="material-icons left">cloud</i>Pay Securely</a></div></div></div>';
                }





        


    });

    $("#res").html(tabledata);
    $("#traveller").html(traveller_data);

    $("#pay").click(function() {
        var newdata = {};
        var flag=0;
        newdata['type']="traveller";
        newdata['returndate']=retdate;
        newdata['data']={};
        for (var j = 0; j < passengers; j++) {
            var first = $("#first_name" + j + "").val();
            var last = $("#last_name" + j + "").val();
            var title = $("#title" + j + "").val();
            if(first=="" || last=="" || title==null)
            {
               flag=1;
            }


            
            newdata['data'][j]={};
            newdata['data'][j]['firstname']= first;
            newdata['data'][j]['lastname'] = last;
            newdata['data'][j]['title']= title;
        }
         newdata = JSON.stringify(newdata);
         console.log(newdata);
            
         if(flag==1)
         {
            M.toast({html: 'please fill all fields'}); 
         }

         else{
        
        
         

                $.ajax({
                    type: "POST",
                    async: false,
                    url: "php/createsession.php",
                    data: {
                        'mydata': newdata,
                    },
                    success: function(result) {
                        
                      console.log(result);
                      result = result.trim();
                    result = result.substring(1, result.length - 1);
                    result = JSON.parse(result);

                    if(result.email=="logged_in"){
                        if(result.msg=="sessions created")
                         window.location="summary.html";
                    }
                    else if(result.email=="not_logged_in")
                    {
                         M.toast({html: 'Not logged in'});
                         window.location="index.html";
                    }
                    else{
                        M.toast({html:'Some Error Occured'});
                    }

           
           
              

                     }



                 })
           

}



    });

});