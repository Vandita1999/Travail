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

function time_converter(time) {
    var a = time.split(':');

    var hours = parseInt(a[0]);
    var mints = parseInt(a[1]);
    if ((hours >= 0 && hours < 6))
        return "midnight";
    else if ((hours >= 6 && hours < 12))
        return "morning";
    else if ((hours >= 12 && hours < 18))
        return "afternoon";
    else
        return "evening";


}

function destroysession() {
    $.ajax({
        type: "POST",
        async: false,
        url: "php/destroy_session_flights.php",
        data: {
            'mydata': "",
        },
        success: function(result) {
            console.log("session for flight destroyed")
        }
    });


}

function nonzerostop(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname) {
    var newdata = '<div class="col s12 m6 l8"> <div class="card"> <div class="card - content white - text"> <div class="row row1" style="padding: 0px;"> <div class="col s2 l2"> <p class="center"><img class="flight_name" src=' + flight + '></p></div><div class="airport col s3 l2"> <div class="src_dest">' + source + '</div><div class="time_1">' + deptime + '</div><div class="date departure_time" >' + departuredate + '</div></div><div class="col s1 l1 stops"> <br><div><i class="material-icons">access_time</i></div><div>' + duration + '</div><div>' + stops + ' stops</div></div><div class="airport col s2 l2"> <div class="src_dest">' + destination + '</div><div class="time_1">' + arrtime + '</div><div class="date departure_time" >' + departuredate + '</div></div><div class="col s2 l2"> <div class="price center fare_flight"> ' + fare + '/-</div></div><div class="col s2 l1"><button class="book_ticket search_oneway" id="' + classname + '" data-fare="' + fare + ' " data-source="' + source + '" data-destination="' + destination + '" data-duration="' + duration + '" data-depdate="' + departuredate + '" data-deptime="' + deptime + '" data-arrtime="' + arrtime + '" data-stops="' + stops + '" data-flight="' + flight + '">BOOK</button></div></div></div></div></div>';

    return newdata;
}

function zerostops(source, destination, arrtime, deptime, flight, duration, stops, fare, departuredate, classname) {

    var zerodata = '<div class="col s12 m6 l8"> <div class="card"> <div class="card - content white - text"> <div class="row row1" style="padding:0px;"> <div class="col s2 l2"> <p class="center"><img class="flight_name" src=' + flight + '></p></div><div class="airport col s3 l2"> <div class="src_dest">' + source + '</div><div class="time_1">' + deptime + '</div><div class="date departure_time">' + departuredate + '</div></div><div class="col s1 l1 stops"> <br><div><i class="material-icons">access_time</i></div><div >' + duration + '</div><div >' + stops + ' stops</div></div><div class="airport col s2 l2"> <div class="src_dest">' + destination + '</div><div class="time_1" >' + arrtime + '</div><div class="date departure_time">' + departuredate + '</div></div><div class="col s2 l2"> <div class="price center fare_flight" >' + fare + '/-</div></div><div class="col s2 l1"> <button class="book_ticket search_oneway" id="' + classname + '" data-fare="' + fare + ' " data-source="' + source + '" data-destination="' + destination + '" data-duration="' + duration + '" data-depdate="' + departuredate + '" data-deptime="' + deptime + '" data-arrtime="' + arrtime + '" data-stops="' + stops + '" data-flight="' + flight + '"> BOOK</button></div></div></div></div></div>';

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
    var month = depdate.substr(6, 7);
    var day = depdate.substr(9, 10);
    var date = depdate.substr(5, 2);
    var newdate = depdate.substr(0, 10);
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

function applyfilteroneway(departure) {
    var filterdata = '<div class="row"> <div class="col s12 m612 l12"> <div class="card filter"> <div class="card-content white-text"> <div class="row" style="padding-top: 0px;"> <div class="col s12 m4 l2"> <h6>Preferences</h6> <br><div class="switch"> <label> Non-Stop <input type="checkbox"> <span class="lever"></span> </label> </div></div><div class="col s12 m4 l6"> <h6>Departure from ' + departure + '</h6> <br><p class="filter-checkbox"> <label> <input type="checkbox" id="midnight"/> <span class="time_in_filter">00:00 - 06:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="morning"/> <span class="time_in_filter">06:00 - 12:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="afternoon"/> <span class="time_in_filter">12:00 - 18:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="evening" /> <span class="time_in_filter">18:00 - 00:00 </span> </label> </p></div><div class="col s12 m4 l4"> <h6>Airline</h6> <br><div class="switch switch-filter"> <label> Air-india <input type="checkbox" id="Airindia"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Jet Airways <input type="checkbox" id="jetairways"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Indigo <input type="checkbox" id="indigo"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> SpiceJet <input type="checkbox" id="spicejet"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Others <input type="checkbox" id="others"> <span class="lever"></span> </label> </div></div></div></div></div></div></div>';
    return filterdata;
}

function applyfilterreturn(arrival) {
    var filterdata = '<div class="row"> <div class="col s12 m612 l12"> <div class="card filter"> <div class="card-content white-text"> <div class="row" style="padding-top: 0px;"> <div class="col s12 m4 l2"> <h6>Preferences</h6> <br><div class="switch"> <label> Non-Stop <input type="checkbox"> <span class="lever"></span> </label> </div></div><div class="col s12 m4 l6"> <h6>Departure from ' + arrival + '</h6> <br><p class="filter-checkbox"> <label> <input type="checkbox" id="midnight_return"/> <span class="time_in_filter">00:00 - 06:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="morning_return"/> <span class="time_in_filter">06:00 - 12:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="afternoon_return"/> <span class="time_in_filter">12:00 - 18:00 </span> </label> </p><p class="filter-checkbox"> <label> <input type="checkbox" id="evening_return" /> <span class="time_in_filter">18:00 - 00:00 </span> </label> </p></div><div class="col s12 m4 l4"> <h6>Airline</h6> <br><div class="switch switch-filter"> <label> Air-india <input type="checkbox" id="Airindia_return"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Jet Airways <input type="checkbox" id="jetairways_return"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Indigo <input type="checkbox" id="indigo_return"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> SpiceJet <input type="checkbox" id="spicejet_return"> <span class="lever"></span> </label> </div><div class="switch switch-filter"> <label> Others <input type="checkbox" id="others_return"> <span class="lever"></span> </label> </div></div></div></div></div></div></div>';
    return filterdata;
}


function selectFlightImage(airline) {
    var flight = "";
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

    return flight;
}

function getUIforTabs(retdate) {
    var tabledata = '';
    if (retdate != '') {
        tabledata = '<div class="row"> <div class="col s12 l6"> <ul class="tabs"> <li style="background-color:#06243a" id="onewayTabButton" class="tab col s6 l6"> <a id="oneway_shift" href="#onwardtab" style="color:white;font-weight:bold">One Way</a> </li><li class="tab col s6 l6" id="returnTabButton" style="background-color:#06243a"> <a id="return_shift" href="#returntab" style="color:white;font-weight:bold">Return</a> </li></ul> </div><div id="onwardtab" class="col s12"> <div id="page-content" class="row page-content"></div><div id="page' + 1 + '" class="row" style="display:none;">';
    } else {
        tabledata = '<div class="row"> <div class="col s4"> <ul class="tabs"> <li style="background-color:#06243a" id="onewayTabButton" class="tab col s12"><a class="active" href="#onwardtab" style="color:white;font-weight:bold">One Way</a></li></ul> </div><div id="onwardtab" class="col s12"> <div id="page-content" class="row page-content"></div><div id="page' + 1 + '" class="row" style="display:none;">';
    }
    return tabledata;
}

function getOneWayUi(result, counter, pageNum, retdate) { //creating UI for oneway
    var resultObj = {};
    var tabledata = '';
    var tempCounter = 0;




    for (var i in result.data.onwardflights) {
        tempCounter++;

        counter++;
        var d = result.data.onwardflights[i];
        var source = d.origin;
        var destination = d.destination;
        var arrtime = d.arrtime;
        var deptime = d.deptime;
        var airline = d.airline;
        var duration = d.duration;
        var depdate = d.depdate;
        flight = selectFlightImage(airline);
        var fare = d.fare.totalfare;
        var stops = d.stops;
        var code = d.flightcode;
        var duration = d.duration;
        var departuredate = dateformat(depdate);
        var count;
        if (stops != 0) {
            var onward = d.onwardflights;
            var destination1 = onward[stops - 1].destination;
            var classname = '';
            if (retdate != '') {
                classname = "search_oneside";
            } else {
                classname = "search_only_oneway";
            }
            tabledata = tabledata + nonzerostop(source, destination1, arrtime, deptime, flight, duration, stops, fare, departuredate, classname);
        } else {
            var classname = '';
            if (retdate != '') {
                classname = "search_oneside_zerostops";
            } else {
                classname = "search_only_oneway_zerostops";
            }
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

    resultObj['tabledata'] = tabledata;
    resultObj['pageNum'] = pageNum;
    return resultObj;
}




function getReturnUi(result, counter, pageNum) { //creating UI for return

    var resultObj = {};
    var tabledata = '';
    var tempCounter = 0;

    for (var i in result.data.returnflights) {

        tempCounter++;
        counter++;
        var d = result.data.returnflights[i];
        var source = d.origin;
        var destination = d.destination;
        var arrtime = d.arrtime;
        var deptime = d.deptime;
        var airline = d.airline;
        var returndate = dateformat(retdate);
        flight = selectFlightImage(airline);
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
        if (counter == 6) {
            tabledata += '</div><div id="page2' + pageNum + '" class="row" style="display:none;">';
            pageNum++;
            counter = 0;
        }
    }
    if (counter == 0) {
        pageNum--;
    }
    tabledata += '</div>';

    resultObj['tabledata'] = tabledata;
    resultObj['pageNum'] = pageNum;
    return resultObj;
}

function create_ui(result) {

    var tmpCountOneWay = 0,
        tmpCountReturn = 0;
    for (i in result.data.onwardflights) {
        tmpCountOneWay++;
    }
    for (i in result.data.returnflights) {
        tmpCountReturn++;
    }
    if ((tmpCountReturn == 0 || tmpCountOneWay == 0) && retdate != '') {
        var newhtml = '<div class="row"> <div class="col s12 m6 l10"> <div class="card" style="background-color:#06243a"> <div class="card-content white-text"> <h2>No Flights Found!!</h2> </div></div></div></div>';
        $("#res").html(newhtml);
    } else if (retdate == "" && tmpCountOneWay == 0) {
        var newhtml = '<div class="row"> <div class="col s12 m6 l10"> <div class="card" style="background-color:#06243a"> <div class="card-content white-text"> <h2>No Flights Found!!</h2> </div></div></div></div>';
        $("#res").html(newhtml);
    } else {

        var tabledata = getUIforTabs(retdate);
        var flight = "";
        var counter = 0;
        var pageNum = 2;

        var counter2 = 0;
        var pageNum2 = 2;
        var obj = getOneWayUi(result, counter, pageNum, retdate);
        pageNum = obj['pageNum'];

        var zero_fligts = obj['zero_flight_oneway'];

        tabledata += obj['tabledata'];

        if (retdate != '') {

            tabledata = tabledata + '</div><div id="returntab" class="col s12"><div id="page-content2" class="row page-content"></div><div id="page2' + 1 + '" class="row" style="display:none;">';

            var obj = getReturnUi(result, counter2, pageNum2);
            pageNum2 = obj['pageNum'];
            tabledata += obj['tabledata'];
            tabledata += '</div></div>';
        } else {
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

        if (retdate != '') {
            $("#paginationDiv2").html('<ul id="paginationNode2"></ul>');
            $('#paginationNode2').twbsPagination({
                totalPages: pageNum2 - 1,
                startPage: 1,
                visiblePages: 10,
                onPageClick: function(event, page) {
                    var pagedata = $("#page2" + page).html();

                    // console.log(pagedata);
                    $('#page-content2').html(pagedata);



                }
            });
        }
    }

    $('.tabs').tabs();
    removepreload();

}

function myCopy(input) { //creating deep copy of a objects of object
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
    //Checking if the user is logged in or not
    var nodata = {};
    $.ajax({
        type: "POST",
        async: false,
        url: "php/createsession.php",
        data: {
            'mydata': nodata,
        },
        success: function(result) {

            result = result.trim();
            result = result.substring(1, result.length - 1);
            result = JSON.parse(result);

            console.log(result);
            if (result.email == "logged_in") {
                var button_html = '<i class="material-icons">power_settings_new</i>';
                $("#logout_button").html(button_html);
                $("#login_button").hide();
            } else {
                var button_html = 'LOGIN';
                $("#login_button").html(button_html);
                $("#logout_button").hide();

            }
        }
    });

    //checking for user-login function closed


    $(document).on("click", "#logout_button", function() { //destroying session on logging out
        $.ajax({
            type: "POST",
            async: false,
            url: "php/destroy_session.php",
            data: {
                'mydata': nodata,
            },
            success: function(result) {

                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);

                console.log(result);
                if (result.msg == "session destroyed") {
                    window.location = "index.html";

                }
            }
        });
    });

    $(document).on("click", "#login_button", function() {
        window.open('login.html');
        $("#login_button").hide();

        $.ajax({ // this is login ajax and not doing any function
            type: "POST",
            async: false,
            url: "index.php",
            data: {
                'mydata': "",
            },
            success: function(result) {
                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);
                if (result.msg == "logged in") {
                    window.location.reload()
                } else {
                    window.location.reload();
                }


            }
        });
    });




    var result1 = "";


    $('.tabs').tabs();
    var date = new Date();


    $('.datepicker').datepicker({
        format: 'mmm ,dd yyyy ddd',
        minDate: new Date()
    });


    $(document).on("click", "#onewayTabButton", function() {
        console.log("onewayTabButton click");
        $(".returnPagination").hide();
        $(".onewayPagination").show();
        $("#filter_div_oneway").show();
        $("#filter_div_return").hide();


    });

    $(document).on("click", "#returnTabButton", function() {
        console.log("returnTabButton click");
        $(".returnPagination").show();
        $(".onewayPagination").hide();
        $("#filter_div_oneway").hide();
        $("#filter_div_return").show();




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
        destroysession();

        data = {};
        from = $('#fromair').val();
        to = $('#toair').val();
        depdate = $('#datepicker').val();
        retdate = $('#datepicker1').val();
        passengers = $('#passengers').val();

        if (from == "" || to == "" || depdate == "" || passengers=="")
        {
            M.toast({ html: 'Please fill all the fields' });
        }

        /* var fromairport = checklist.check.call(from);
         var toairport = checklist.check.call(to);*/
        else {
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
                    create_ui(result);
                    var filterdata_oneway = applyfilteroneway(from);
                    $("#filter_div_oneway").html(filterdata_oneway);
                    var filterdata_return = applyfilterreturn(to);
                    $("#filter_div_return").html(filterdata_return);
                    $("#filter_div_return").hide();

                    flightsJson = myCopy(result);
                    tempJson = myCopy(flightsJson);


                }



            });
        }




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
        var oneway_filter_applied = "oneway applied";


        tempJson.data.onwardflights = myCopy(flightsJson.data.onwardflights);
        filterdata(spicejet, airindia, jetairways, indigo, afternoon, morning, midnight, evening, others);

    });

    $(document).on('change', '#Airindia_return,#spicejet_return,#jetairways_return,#indigo_return,#afternoon_return,#morning_return,#midnight_return,#evening_return,#others_return ', function() {
        var spicejet_return = $("#spicejet_return").is(":checked");
        var airindia_return = $("#Airindia_return").is(":checked");
        var jetairways_return = $("#jetairways_return").is(":checked");
        var indigo_return = $("#indigo_return").is(":checked");
        var others_return = $("#others_return").is(":checked");


        var afternoon_return = $("#afternoon_return").is(":checked");
        var morning_return = $("#morning_return").is(":checked");
        var midnight_return = $("#midnight_return").is(":checked");
        var evening_return = $("#evening_return").is(":checked");
        var return_filter_applied = "return applied";


        tempJson.data.returnflights = myCopy(flightsJson.data.returnflights);
        filterdatareturn(spicejet_return, airindia_return, jetairways_return, indigo_return, afternoon_return, morning_return, midnight_return, evening_return, others_return);

    });

    function filterdata(spicejet, airindia, jetairways, indigo, afternoon, morning, midnight, evening, others) {

        if (spicejet || airindia || jetairways || indigo || others) {
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
        }
        if (afternoon || morning || midnight || evening) {
            for (var j in tempJson.data.onwardflights) {
                if (time_converter(tempJson.data.onwardflights[j].deptime) == "morning" && !morning)
                    delete tempJson.data.onwardflights[j];
                else if (time_converter(tempJson.data.onwardflights[j].deptime) == "evening" && !evening)
                    delete tempJson.data.onwardflights[j];
                else if (time_converter(tempJson.data.onwardflights[j].deptime) == "midnight" && !midnight)
                    delete tempJson.data.onwardflights[j];
                else if (time_converter(tempJson.data.onwardflights[j].deptime) == "afternoon" && !afternoon)
                    delete tempJson.data.onwardflights[j];

            }
        }

        create_ui(tempJson);
        $(".returnPagination").hide();
        $(".onewayPagination").show();
        console.log(tempJson);
        console.log(flightsJson);

    }

    function filterdatareturn(spicejet_return, airindia_return, jetairways_return, indigo_return, afternoon_return, morning_return, midnight_return, evening_return, others_return) {

        if (spicejet_return || airindia_return || jetairways_return || indigo_return || others_return)
            for (var j in tempJson.data.returnflights) {
                if (tempJson.data.returnflights[j].airline == "Spicejet" && !spicejet_return)
                    delete tempJson.data.returnflights[j];
                else if (tempJson.data.returnflights[j].airline == "Air India" && !airindia_return)
                    delete tempJson.data.returnflights[j];
                else if (tempJson.data.returnflights[j].airline == "Jet Airways" && !jetairways_return)
                    delete tempJson.data.returnflights[j];
                else if (tempJson.data.returnflights[j].airline == "IndiGo" && !indigo_return)
                    delete tempJson.data.returnflights[j];
                else if (tempJson.data.returnflights[j].airline != "Spicejet" && tempJson.data.returnflights[j].airline != "Air India" && tempJson.data.returnflights[j].airline != "IndiGo" && tempJson.data.returnflights[j].airline != "Jet Airways" && !others_return) {
                    delete tempJson.data.returnflights[j];
                }
            }

        if (afternoon_return || morning_return || midnight_return || evening_return) {
            for (var j in tempJson.data.returnflights) {
                if (time_converter(tempJson.data.returnflights[j].deptime) == "morning" && !morning_return)
                    delete tempJson.data.returnflights[j];
                else if (time_converter(tempJson.data.returnflights[j].deptime) == "evening" && !evening_return)
                    delete tempJson.data.returnflights[j];
                else if (time_converter(tempJson.data.returnflights[j].deptime) == "midnight" && !midnight_return)
                    delete tempJson.data.returnflights[j];
                else if (time_converter(tempJson.data.returnflights[j].deptime) == "afternoon" && !afternoon_return)
                    delete tempJson.data.returnflights[j];

            }
        }


        create_ui(tempJson);
        var elem = $(".tabs").tabs();
        var instance = M.Tabs.getInstance(elem);
        instance.select('returntab');
        instance.updateTabIndicator();
        $(".returnPagination").show();
        $(".onewayPagination").hide();
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
        datasign['returndate'] = retdate;
        console.log(retdate);
        datasign = JSON.stringify(datasign);
        $.ajax({
            type: "POST",
            async: false,
            url: "php/createsession.php",
            data: {
                'mydata': datasign,
            },
            success: function(result) {

                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);

                console.log(result);
                var msg = result.msg;




                if (retdate != "")

                {
                    if (result.email == "logged_in") {
                        if (msg == "session created for oneway and return") {
                            window.location = "book.html";
                        } else if (msg == "session created only for oneway") {
                            swal({
                                title: "ONEWAY DONE",
                                text: "Please select for return!",
                                icon: "success",
                                button: "Continue",
                            });



                        } else if (msg == "session created only for return") {

                            swal({
                                title: "Return DONE",
                                text: "Please select for oneway!",
                                icon: "success",
                                button: "Continue",
                            });
                            var elem = $(".tabs").tabs();
                            var instance = M.Tabs.getInstance(elem);
                            instance.select('onwardtab');
                            instance.updateTabIndicator();


                        } else {
                            swal({
                                title: "ERROR",
                                text: "Please book again",
                                icon: "warning",
                                button: "Continue",
                            });
                        }
                    } else {
                        swal({
                            title: "not logged in",
                            text: "please login!",
                            icon: "warning",
                            button: "Continue",
                        });
                    }

                } else {
                    if (result.email == "logged_in")
                        window.location = "book.html";
                    else {
                        swal({
                            title: "Not logged in",
                            text: "please login!",
                            icon: "warning",
                            button: "Continue",
                        });
                    }
                }
            }
        });


    }
});