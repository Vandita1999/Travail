 $(document).ready(function() {
     var toastElement = document.querySelector('.toast');
     var toastInstance = M.Toast.getInstance(toastElement);
     toastInstance.dismiss();
 });


 function addpreload() {

     $("#preload").show();
     $("#preload_back").hide();
 }

 function removepreload() {
     $("#preload").hide();
     $("#preload_back").show();
 }

 function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }

 function timediff(start, end) {
     start = start.split(":");
     end = end.split(":");

     var diff = end - start;
     var hours = Math.floor(diff / 1000 / 60 / 60);
     diff -= hours * 1000 * 60 * 60;
     var minutes = Math.floor(diff / 1000 / 60);

     // If using time pickers with 24 hours format, add the below line get exact hours
     if (hours < 0)
         hours = hours + 24;

     return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
 }

 function nonzerostop(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname) {
     var newdata = '<div class="col s12 m6 l8"> <div class="card blue - grey darken - 1"> <div class="card - content white - text"> <div class="row row1" style="padding: 0px;"> <div class="col s2 l2"> <p class="center"><img class="flight_name" src=' + flight + '></p></div><div class="airport col s3 l2"> <div class="src_dest">' + source + '</div><div class="time_1">' + deptime + '</div><div class="date departure_time" >' + departuredate + '</div></div><div class="col s1 l1 stops"> <br><div><i class="material-icons">access_time</i></div><div>' + duration + '</div><div>' + stops + ' stops</div></div><div class="airport col s2 l2"> <div class="src_dest">' + destination + '</div><div class="time_1">' + arrtime + '</div><div class="date departure_time" >' + departuredate + '</div></div><div class="col s2 l2"> <div class="price center fare_flight"> ' + fare + '/-</div></div><div class="col s2 l1"><button class="book_ticket search_oneway" id="' + classname + '" data-fare="' + fare + ' " data-source="' + source + '" data-destination="' + destination + '" data-duration="' + duration + '" data-depdate="' + departuredate + '" data-deptime="' + deptime + '" data-arrtime="' + arrtime + '" data-stops="' + stops + '" data-flight="' + flight + '">BOOK</button></div></div></div></div></div>';

     return newdata;
 }

 function zerostops(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname) {

     var zerodata = '<div class="col s12 m6 l8"> <div class="card blue - grey darken - 1"> <div class="card - content white - text"> <div class="row row1" style="padding:0px;"> <div class="col s2 l2"> <p class="center"><img class="flight_name" src=' + flight + '></p></div><div class="airport col s3 l2"> <div class="src_dest">' + source + '</div><div class="time_1">' + deptime + '</div><div class="date departure_time">' + departuredate + '</div></div><div class="col s1 l1 stops"> <br><div><i class="material-icons">access_time</i></div><div >' + duration + '</div><div >' + stops + ' stops</div></div><div class="airport col s2 l2"> <div class="src_dest">' + destination + '</div><div class="time_1" >' + arrtime + '</div><div class="date departure_time">' + departuredate + '</div></div><div class="col s2 l2"> <div class="price center fare_flight" >' + fare + '/-</div></div><div class="col s2 l1"> <button class="book_ticket search_oneway" id="' + classname + '" data-fare="' + fare + ' " data-source="' + source + '" data-destination="' + destination + '" data-duration="' + duration + '" data-depdate="' + departuredate + '" data-deptime="' + deptime + '" data-arrtime="' + arrtime + '" data-stops="' + stops + '" data-flight="' + flight + '"> BOOK</button></div></div></div></div></div>';

     return zerodata;

 }




 function sanitize(depdate) {
     var year = depdate.substr(8, 4);
     var month = depdate.substr(0, 3);
     var month = getmonth_number(month);
     var date = depdate.substr(5, 2);
     var date_new = year + month + date;
     return date_new;
 }

 function dateformat(depdate) {
     var month = depdate.substr(0, 3);
     var day = depdate.substr(13, 3);
     var date = depdate.substr(5, 2);
     var newdate = day + ' , ' + date + ' ' + month;
     return newdate;
 }

 function getmonth_number(month) {
     var array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     for (var i = 0; i < array.length; i++)
         if (month == array[i]) {
             if (i < 9) {
                 return "0" + (i + 1);
             } else {
                 return (i + 1);
             }
         }
 }

 function applyfilter() {
     var filterdata = '<div class="row"> <div class="col s12 m612 l12"> <div class="card filter"> <div class="card-content white-text"> <div class="row" style="padding-top: 0px;"> <div class="col s12 m4 l2"> <h6>Preferences</h6> <br><div class="switch"> <label> Non-Stop <input type="checkbox"> <span class="lever"></span> </label> </div></div><div class="col s12 m4 l6"> <h6>Departure from HYD</h6> <br><p class="filter-checkbox"> <label> <input type="checkbox" id="midnight"/> <span>00:00 - 06:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="morning"/> <span>06:00 - 12:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="afternoon"/> <span>12:00 - 18:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="evening" /> <span>18:00 - 00:00 </span> </label> </p></div><div class="col s12 m4 l4"> <h6>Airline</h6> <br><div class="switch switch-filter"> <label> Air-india <input type="checkbox" id="Airindia"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Jet Airways <input type="checkbox" id="jetairways"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Indigo <input type="checkbox" id="indigo"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> SpiceJet <input type="checkbox" id="spicejet"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Others <input type="checkbox" id="others"> <span class="lever"></span> </label> </div></div></div></div></div></div>';
     return filterdata;
 }
 var flag = 1;

 function create_ui(result) {
     //  console.log(flight_name);

     var tabledata = '';
     var flight = "";
     //flightsJson = JSON.parse(JSON.stringify(result));




     //console.log(result.data.onwardflights);
     if (retdate != '') {
         var tabledata = tabledata + '<div class="row"> <div class="col s12 l6"> <ul class="tabs"> <li style="background-color:#06243a" class="tab col s6 l6"> <a class="active" href="#onwardtab" style="color:white;font-weight:bold">One Way</a> </li><li class="tab col s6 l6" li style="background-color:#06243a"> <a href="#returntab" style="color:white;font-weight:bold">Return</a> </li></ul> </div><div id="onwardtab" class="col s12"> <div id="page-content" class="row page-content"></div><div id="page' + 1 + '" class="row" style="display:none;">';
         var counter = 0;

         var pageNum = 2;
         var tempCounter = 0;
         for (var i in result.data.onwardflights) {
             tempCounter++;

             counter++;
             // console.log(i);

             var d = result.data.onwardflights[i];
             var source = d.origin;
             var destination = d.destination;
             var arrtime = d.arrtime;
             var deptime = d.deptime;
             var airline = d.airline;
             var duration = d.duration;
             var depdate = d.depdate;

             var difference_time = timediff(deptime, arrtime);



             if (airline == "Spicejet")
                 flight = "img/flight/spice.png";
             else if (airline == "GoAir")
                 flight = "img/flight/goair.png";
             else if (airline == "IndiGo")
                 flight = "img/flight/indigo.png";
             else if (airline == "Vistara")
                 flight = "img/flight/vistara.png";
             else if (airline == "Air India")
                 flight = "img/flight/air.jpg";
             else if (airline == "Jet Airways")
                 flight = "img/flight/jet.png";
             else
                 flight = "img/flight/vistara.png";

             var fare = d.fare.totalfare;
             var stops = d.stops;
             var code = d.flightcode;
             var duration = d.duration;
             var departuredate = dateformat(depdate);
             var count;


             if (stops != 0) {
                 var onward = d.onwardflights;
                 var destination1 = onward[stops - 1].destination;
                 var classname = "search_oneside";


                 tabledata = tabledata + nonzerostop(source, destination1, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);
             } else {
                 var classname = "search_oneside_zerostops";

                 tabledata = tabledata + zerostops(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);
             }

             if (counter == 6) {
                 tabledata += '</div><div id="page' + pageNum + '" class="row" style="display:none;">';
                 pageNum++;
                 counter = 0;
             }
         }
         if (counter == 0) {
             pageNum--;
         }
         tabledata += '</div>';
         tabledata = tabledata + '</div><div id="returntab" class="col s12">';
         //console.log(result.data.returnflights);

         for (var i in result.data.returnflights) {

             var d = result.data.returnflights[i];
             var source = d.origin;
             var destination = d.destination;
             var arrtime = d.arrtime;
             var deptime = d.deptime;
             var airline = d.airline;
             var returndate = dateformat(retdate);



             if (airline == "Spicejet")
                 flight = "img/flight/spice.png";
             else if (airline = "GoAir")
                 flight = "img/flight/goair.png";
             else if (airline = "IndiGo")
                 flight = "img/flight/indigo.png";
             else if (airline = "Vistara")
                 flight = "img/flight/vistara.png";
             else if (airline = "Air India")
                 flight = "img/flight/air.jpg";
             else if (airline = "Jet Airways")
                 flight = "img/flight/jet.png";
             else
                 flight = "img/flight/vistara.png";

             var fare = d.fare.totalfare;
             var stops = d.stops;
             var code = d.flightcode;
             var duration = d.duration;
             var depdate = d.depdate;
             var departuredate = dateformat(depdate);


             if (stops != 0) {
                 var onward = d.onwardflights;
                 var classname = "search_return";

                 var destination1 = onward[stops - 1].destination;
                 tabledata = tabledata + nonzerostop(source, destination1, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);

             } else {
                 var classname = "search_return_zerostops";
                 tabledata = tabledata + zerostops(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);

             }



         }

         tabledata = tabledata + '</div></div>';

     } else {
         tabledata = tabledata + '<div class="row"> <div class="col s4"> <ul class="tabs"> <li style="background-color:#06243a" class="tab col s12"><a class="active" href="#onwardtab" style="color:white;font-weight:bold">One Way</a></li></ul> </div><div id="onwardtab" class="col s12"> <div class="row">';

         for (var i in result.data.onwardflights) {
             var d = result.data.onwardflights[i];
             var source = d.origin;
             var destination = d.destination;
             var arrtime = d.arrtime;
             var deptime = d.deptime;
             var airline = d.airline;
             var duration = d.duration;
             var difference_time = timediff(deptime, arrtime);



             if (airline == "Spicejet")
                 flight = "img/flight/spice.png";
             else if (airline == "GoAir")
                 flight = "img/flight/goair.png";
             else if (airline == "IndiGo")
                 flight = "img/flight/indigo.png";
             else if (airline == "Vistara")
                 flight = "img/flight/vistara.png";
             else if (airline == "Air India")
                 flight = "img/flight/air.jpg";
             else if (airline == "Jet Airways")
                 flight = "img/flight/jet.png";
             else
                 flight = "img/flight/vistara.png";

             var fare = d.fare.totalfare;
             var stops = d.stops;
             var code = d.flightcode;
             var duration = d.duration;
             var count;


             if (stops != 0) {
                 var onward = d.onwardflights;
                 var destination1 = onward[stops - 1].destination;
                 var classname = "search_only_oneway";

                 tabledata = tabledata + nonzerostop(source, destination1, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);
             } else {
                 var classname = "search_only_oneway_zerostops";

                 tabledata = tabledata + zerostops(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);
             }


         }

         tabledata = tabledata + ' </div></div></div>';
     }
     $("#paginationDiv").html('<ul id="paginationNode"></ul>');
     $("#res").html(tabledata);
     $('#paginationNode').twbsPagination({
         totalPages: pageNum - 1,
         startPage: 1,
         visiblePages: 10,
         onPageClick: function(event, page) {
             var pagedata = $("#page" + page).html();

             // console.log(pagedata);
             $('#page-content').html(pagedata);



         }
     });

     if (flag == 1) {
         flag = 0;
     }

     $('.tabs').tabs();
     removepreload();
 }

 function deepcopy() {
     tempJson = Object.assign({}, flightsJson);
 }

 function myCopy(input) {
     var copy = new Object();
     for (i in input) {
         //console.log(input[i]);
         if (input[i] instanceof Object) {
             copy[i] = myCopy(input[i]);
         } else {
             copy[i] = input[i];
         }
     }
     return copy;
 }
 var flightsJson = {};
 var tempJson = {};
 var from;
 var to;
 var depdate;
 var retdate;
 var apidate;
 var apidatereturn;
 var passengers;
 $(document).ready(function() {

     var result1 = "";


     $('.tabs').tabs();
     var date = new Date();


     $('.datepicker').datepicker({
         format: 'mmm ,dd yyyy ddd',
         minDate: new Date()
     });



     $(".group1").click(function() {
         var type = $(this).attr("data-val");
         if (type == 'one') {
             $("#datepicker1").attr("disabled", "true");
             $("#datepicker1").val("");
         } else {
             $("#datepicker1").removeAttr("disabled");
         }
     });


     $("#search").click(function() {
         $("preload_back").css("background-attachment", "auto")
         data = {};
         from = $('#fromair').val();
         to = $('#toair').val();
         depdate = $('#datepicker').val();
         retdate = $('#datepicker1').val();
         passengers = $('#passengers').val();


         /* var fromairport = checklist.check.call(from);
          var toairport = checklist.check.call(to);*/
         apidate = sanitize(depdate);
         apidatereturn = sanitize(retdate);
         apidate = apidate.trim();
         apidatereturn = apidatereturn.trim();

         addpreload();
         if (retdate == '') {
             url1 = "https://cors.io/?http://developer.goibibo.com/api/search/?app_id=ce12da1f&app_key=d3c6fa6d61930ea8400451efe94cde68&format=json&source=" + from + "&destination=" + to + "&dateofdeparture=" + apidate + "&seatingclass=E&adults=1&children=0&infants=0&counter=100";

         } else {

             url1 = "https://developer.goibibo.com/api/search/?app_id=ce12da1f&app_key=58f55aed94ba341312446c72b8e44475&format=json&source=" + from + "&destination=" + to + "&dateofdeparture=" + apidate + "&dateofarrival=" + apidatereturn + "&seatingclass=E&adults=1&children=0&infants=0&counter=100";
         }
         $.ajax({
             type: "GET",
             async: true,
             dataType: "json",
             url: url1,
             success: function(result) {
                 console.log(result);
                 var filterdata = applyfilter();
                 $("#filter_div").html(filterdata);
                 flightsJson = myCopy(result);
                 create_ui(result);


             }



         });




     });

     $(document).on('change', '#Airindia,#spicejet,#jetairways,#indigo,#afternoon,#morning,#midnight,#evening,#others', function() {
         var spicejet = $("#spicejet").is(":checked");
         var airindia = $("#Airindia").is(":checked");
         var jetairways = $("#jetairways").is(":checked");
         var indigo = $("#indigo").is(":checked");
         var others = $("#others").is(":checked");


         var afternoon = $("#afternoon").is(":checked");
         var morning = $("#morning").is(":checked");
         var midnight = $("#midnight").is(":checked");
         var evening = $("#evening").is(":checked");


         tempJson = myCopy(flightsJson);
         filterdata(spicejet, airindia, jetairways, indigo, afternoon, morning, midnight, evening, others);

     });

     function filterdata(spicejet, airindia, jetairways, indigo, afternoon, morning, midnight, evening, others) {

         if (spicejet || airindia || jetairways || indigo || others)
             for (var j in tempJson.data.onwardflights) {
                 if (tempJson.data.onwardflights[j].airline == "Spicejet" && !spicejet)
                     delete tempJson.data.onwardflights[j];
                 else if (tempJson.data.onwardflights[j].airline == "Air India" && !airindia)
                     delete tempJson.data.onwardflights[j];
                 else if (tempJson.data.onwardflights[j].airline == "Jet Airways" && !jetairways)
                     delete tempJson.data.onwardflights[j];
                 else if (tempJson.data.onwardflights[j].airline == "IndiGo" && !indigo)
                     delete tempJson.data.onwardflights[j];
                 else if (tempJson.data.onwardflights[j].airline != "Spicejet" && tempJson.data.onwardflights[j].airline != "Air India" && tempJson.data.onwardflights[j].airline != "IndiGo" && tempJson.data.onwardflights[j].airline != "Jet Airways" && !others) {
                     delete tempJson.data.onwardflights[j];
                 }
             }
         create_ui(tempJson);
         console.log(tempJson);
         console.log(flightsJson);

     }


     $(document).on("click", ".search_oneway", function() {
         var elem = $(".tabs").tabs();
         var instance = M.Tabs.getInstance(elem);
         instance.select('returntab');
         instance.updateTabIndicator();
     });

     $(document).on("click", "#search_oneside", function() {
         var datapass = {};
         var passengers = $('#passengers').val();
         var fare = $(this).data('fare');
         var source = $(this).data('source');
         var destination = $(this).data('destination');
         var duration = $(this).data('duration');
         var stops = $(this).data('stops');
         var deptime = $(this).data('deptime');
         var arrtime = $(this).data('arrtime');
         var flight = $(this).data('flight');
         var type = "oneside";
         datapass['fare'] = fare;
         datapass['source'] = source;
         datapass['destination'] = destination;
         datapass['stops'] = stops;
         datapass['deptime'] = deptime;
         datapass['arrtime'] = arrtime;
         datapass['type'] = type;
         datapass['duration'] = duration;
         datapass['flight'] = flight;
         datapass['passengers'] = passengers;
         callajax(datapass);
     });

     $(document).on("click", "#search_oneside_zerostops", function() {
         datapass = {};
         var passengers = $('#passengers').val();
         var fare = $(this).data('fare');
         var source = $(this).data('source');
         var destination = $(this).data('destination');
         var duration = $(this).data('duration');
         var stops = $(this).data('stops');
         var deptime = $(this).data('deptime');
         var arrtime = $(this).data('arrtime');
         var flight = $(this).data('flight');
         var type = "oneside"
         datapass['fare'] = fare;
         datapass['source'] = source;
         datapass['destination'] = destination;
         datapass['stops'] = stops;
         datapass['deptime'] = deptime;
         datapass['arrtime'] = arrtime;
         datapass['type'] = type;
         datapass['duration'] = duration;
         datapass['flight'] = flight;
         datapass['passengers'] = passengers;
         callajax(datapass);


     });
     $(document).on("click", "#search_return", function() {
         var passengers = $('#passengers').val();
         var datapass = {};
         var fare = $(this).data('fare');
         var source = $(this).data('source');
         var destination = $(this).data('destination');
         var duration = $(this).data('duration');
         var stops = $(this).data('stops');
         var deptime = $(this).data('deptime');
         var arrtime = $(this).data('arrtime');
         var flight = $(this).data('flight');
         var type = "return";
         datapass['fare'] = fare;
         datapass['source'] = source;
         datapass['destination'] = destination;
         datapass['stops'] = stops;
         datapass['deptime'] = deptime;
         datapass['arrtime'] = arrtime;
         datapass['type'] = type;
         datapass['duration'] = duration;
         datapass['flight'] = flight;
         datapass['passengers'] = passengers;
         callajax(datapass);



     });
     $(document).on("click", "#search_return_zerostops", function() {
         var datapass = {};
         var passengers = $('#passengers').val();
         var fare = $(this).data('fare');
         var source = $(this).data('source');
         var destination = $(this).data('destination');
         var duration = $(this).data('duration');
         var stops = $(this).data('stops');
         var deptime = $(this).data('deptime');
         var arrtime = $(this).data('arrtime');
         var flight = $(this).data('flight');
         var type = "return";
         datapass['passengers'] = passengers;
         datapass['fare'] = fare;
         datapass['source'] = source;
         datapass['destination'] = destination;
         datapass['stops'] = stops;
         datapass['deptime'] = deptime;
         datapass['arrtime'] = arrtime;
         datapass['type'] = type;
         datapass['duration'] = duration;
         datapass['flight'] = flight;
         callajax(datapass);




     });
     $(document).on("click", "#search_only_oneway", function() {
         var datapass = {};
         var passengers = $('#passengers').val();
         var fare = $(this).data('fare');
         var source = $(this).data('source');
         var destination = $(this).data('destination');
         var duration = $(this).data('duration');
         var stops = $(this).data('stops');
         var deptime = $(this).data('deptime');
         var arrtime = $(this).data('arrtime');
         var flight = $(this).data('flight');
         var type = "oneside";
         datapass['fare'] = fare;
         datapass['source'] = source;
         datapass['destination'] = destination;
         datapass['stops'] = stops;
         datapass['deptime'] = deptime;
         datapass['arrtime'] = arrtime;
         datapass['type'] = type;
         datapass['duration'] = duration;
         datapass['flight'] = flight;
         datapass['passengers'] = passengers;
         callajax(datapass);




     });
     $(document).on("click", "#search_only_oneway_zerostops", function() {
         var passengers = $('#passengers').val();
         var datapass = {};
         var fare = $(this).data('fare');
         var source = $(this).data('source');
         var destination = $(this).data('destination');
         var duration = $(this).data('duration');
         var stops = $(this).data('stops');
         var deptime = $(this).data('deptime');
         var arrtime = $(this).data('arrtime');
         var flight = $(this).data('flight');
         var type = "oneside";
         datapass['fare'] = fare;
         datapass['source'] = source;
         datapass['destination'] = destination;
         datapass['stops'] = stops;
         datapass['deptime'] = deptime;
         datapass['arrtime'] = arrtime;
         datapass['type'] = type;
         datapass['duration'] = duration;
         datapass['flight'] = flight;
         datapass['passengers'] = passengers;
         callajax(datapass);





     });

     function callajax(datasign) {
         var retdate = $('#datepicker1').val();
         datasign = JSON.stringify(datasign);
         $.ajax({
             type: "POST",
             async: false,
             url: "createsession.php",
             data: {
                 'mydata': datasign,
             },
             success: function(result) {

                 result = result.trim();
                 result = result.substring(1, result.length - 1);
                 result = JSON.parse(result);

                 if (retdate != "") {
                     if (result.msg == "session created for return") {
                         window.location = "book.html";
                     } else {
                         M.toast({ html: 'Oneway Done!', classes: 'rounded' });
                         swal({
                             title: "ONEWAY DONE",
                             text: "Please select for return!",
                             icon: "success",
                             button: "Continue",
                         });
                     }

                 } else
                     window.location = "book.html";
             }
         });


     }
 });