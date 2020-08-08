$(document).ready(function() {
var mydata={};
mydata['type']="traveller";
var traveller_result={};
var flight_result={};



mydata=JSON.stringify(mydata);
 $.ajax({
        type: "POST",
        async: false,
        url: "php/retrievesession_for_traveller.php",
        data: {
            'mydata': mydata,
        },
        success: function(result) {
        	result = result.trim();
            result = result.substring(1, result.length - 1);
            result = JSON.parse(result);
            
        	traveller_result=result;
        	console.log(traveller_result);




}
});
 var newdata={};
 newdata['sendata']="send";
 newdata=JSON.stringify(newdata);
  $.ajax({
        type: "POST",
        async: false,
        url: "php/retrievesession.php",
        data: {
            'mydata': mydata,
        },
        success: function(result) {
        	result = result.trim();
            result = result.substring(1, result.length - 1);
            result = JSON.parse(result);
        	
        	flight_result=result;
        	console.log(flight_result);





}
});
var tabledata="";
			var source = flight_result.source;
            var destination = flight_result.destination;
            var stops = flight_result.stops;
            var flight = flight_result.flight;
            var duration = flight_result.duration;
            var arrtime = flight_result.arrtime;
            var deptime = flight_result.deptime;
            var fare = flight_result.fare;
            passengers = flight_result.passengers;


            var passengers_return = flight_result.passengers_return;
            var source_return = flight_result.source_return;
            var destination_return = flight_result.destination_return;
            var stops_return = flight_result.stops_return;
            var flight_return = flight_result.flight_return;
            var duration_return = flight_result.duration_return;
            var arrtime_return = flight_result.arrtime_return;
            var deptime_return = flight_result.deptime_return;
            var fare_return = flight_result.fare_return;
            var passengers_return = flight_result.passengers_return;
            var type = flight_result.returndate;
            console.log(type);

            if (type !="") {
                tabledata = '<div class="row" > <div class="col s12 m12 l10 offset-l1"> <div class="card-panel whie"> <span class="black-text"> <div class="row row1" style="padding:-15px;margiin-bottom:-30px;"> <div class="col s2"> <img class="flight_name" src="' + flight + '" > </div><div class="col s2"> <div class="src_dest">' + source + '</div><div class="timimgs">' + deptime + '</div></div><div class="col s3"> <p class="duration">' + duration + '</p><p style="font-size:10px">' + stops + ' stops</p></div><div class="col s2"> <div class="src_dest">' + destination + '</div><div class="timimgs">' + arrtime + '</div></div><div class="col s3"> <div class="fare">' + fare + '/-</div></div></div></span> </div></div></div><div class="row row1" style="margin-top: -40px"> <div class="col s12 m12 l10 offset-l1"> <div class="card-panel white"> <span class="black-text"> <div class="row row1"> <div class="col s2"> <img class="flight_name" src="' + flight_return + '" > </div><div class="col s2"> <div class="src_dest">' + source_return + '</div><div class="timimgs">' + deptime_return + '</div></div><div class="col s3"> <p class="duration">' + duration_return + '</p><p style="font-size:10px">' + stops_return + ' stops</p></div><div class="col s2"> <div class="src_dest">' + destination_return + '</div><div class="timimgs">' + arrtime_return + '</div></div><div class="col s3"> <div class="fare">' + fare_return + '/-</div></div></span> </div></div></div>';
            } else {


                tabledata = '<div class="row row1"> <div class="col s12 m5 l10 offset-l1"> <div class="card-panel white"> <span class="black-text"> <div class="row row1"> <div class="col s2"> <img class="flight_name" src="' + flight + '" > </div><div class="col s2"> <h4 class="src_dest">' + source + '</h4> <h8>' + deptime + '</h8> </div><div class="col s3"> <p style="margin-top:25px;" class="duration">' + duration + '</p><p style="font-size:10px">' + stops + ' stops</p></div><div class="col s2"> <h4 class="src_dest">' + destination + '</h4> <h8>' + arrtime + '</h8> </div><div class="col s2" class="fare">' + fare + ' </div></span></div></div></div>';


            }

            var htmldata="";
            var key=0;
            for(key in traveller_result.array)
                        {
            var d=traveller_result.array[key];
            	var first=d[1];
            	var title=d[0];
            	var last=d[2];
            	var pnr=d[3];
            	htmldata+=' <div class="row row1"> <div class="col s12 m12 l10 offset-l1" style="margin-bottom:-20px"> <div class="card white "> <div class="card-content black-text"> <div class="row row1" > <div class="col s1 l2 m1"  style="font-weight: bold;">'+(++key)+' </div><div class="col s2 l2 m2 title" >'+title+'</div><div class="col s3 l2 m2 firstname">'+first+'</div><div class="col s2 l2 m2 lastname">'+last+'</div><div class="col s2 l2 m2 pnr">'+pnr+'</div></div></div></div></div></div>';


            }

            $("#res").html(tabledata);
            $("#traveller_result").html(htmldata);



});

