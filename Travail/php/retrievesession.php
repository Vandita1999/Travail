<?php
	session_start();

	$type=$_SESSION['type_of_travel'];
	$retdate=$_SESSION['returndate'];

if($retdate=="")
{

	$source=$_SESSION['source'];
	$destination=$_SESSION['destination'];
	$duration=$_SESSION['duration'];;
	$flight=$_SESSION['flight'];
	$stops=$_SESSION['stops'];
	$arrtime=$_SESSION['arrtime'];;
	$deptime=$_SESSION['deptime'];;
	$passengers=$_SESSION['passengers'];
	$fare=$_SESSION['fare'];
	


	$result['source']=$source;
	$result['destination']=$destination;
	$result['duration']=$duration;
	$result['flight']=$flight;
	$result['stops']=$stops;
	$result['arrtime']=$arrtime;
	$result['deptime']=$deptime;
	$result['fare']=$fare;
	$result['passengers']=$passengers;
	$result['type_of_travel']="no return";
	$result['returndate']=$retdate;
	echo var_export(json_encode($result));

}

else
{

	$source=$_SESSION['source'];
	$destination=$_SESSION['destination'];
	$duration=$_SESSION['duration'];;
	$flight=$_SESSION['flight'];
	$stops=$_SESSION['stops'];
	$arrtime=$_SESSION['arrtime'];
	$deptime=$_SESSION['deptime'];
	$passengers=$_SESSION['passengers'];
	$fare=$_SESSION['fare'];
	


	$result['source']=$source;
	$result['destination']=$destination;
	$result['duration']=$duration;
	$result['flight']=$flight;
	$result['stops']=$stops;
	$result['arrtime']=$arrtime;
	$result['deptime']=$deptime;
	$result['fare']=$fare;
	$result['passengers']=$passengers;
	$result['type_of_travel']="return date found";


	$source_return=$_SESSION['source_return'];
	$destination_return=$_SESSION['destination_return'];
	$duration_return=$_SESSION['duration_return'];;
	$flight_return=$_SESSION['flight_return'];
	$stops_return=$_SESSION['stops_return'];
	$arrtime_return=$_SESSION['arrtime_return'];;
	$deptime_return=$_SESSION['deptime_return'];;
	$passengers_return=$_SESSION['passengers_return'];
	$fare_return=$_SESSION['fare_return'];
	


	$result['source_return']=$source_return;
	$result['destination_return']=$destination_return;
	$result['duration_return']=$duration_return;
	$result['flight_return']=$flight_return;
	$result['stops_return']=$stops_return;
	$result['arrtime_return']=$arrtime_return;
	$result['deptime_return']=$deptime_return;
	$result['fare_return']=$fare_return;
	$result['passengers_return']=$passengers_return;
	$result['returndate']=$retdate;
	echo var_export(json_encode($result));
}

?>