
<?php
include_once 'dbconnect.php';
session_start();
$result = [];
$result['msg_oneway'];
$result['msg_return'];
$data = json_decode($_POST['mydata']);
$type = $data->type;
$returndate = $data->returndate;
$_SESSION['returndate'] = $returndate;
$email = $_SESSION['email_session'];

if (isset($_SESSION["email_session"]))
{
	$result['email'] = "logged_in";
	if ($type == "oneside" || $type == "return")
	{
		if ($returndate == "")
		{
			if ($type == "oneside")
			{
				$source = $data->source;
				$destination = $data->destination;
				$duration = $data->duration;
				$flight = $data->flight;
				$stops = $data->stops;
				$arrtime = $data->arrtime;
				$deptime = $data->deptime;
				$passengers = $data->passengers;
				$fare = $data->fare;
				$_SESSION['source'] = $source;
				$_SESSION['destination'] = $destination;
				$_SESSION['duration'] = $duration;
				$_SESSION['flight'] = $flight;
				$_SESSION['stops'] = $stops;
				$_SESSION['arrtime'] = $arrtime;
				$_SESSION['deptime'] = $deptime;
				$_SESSION['passengers'] = $passengers;
				$_SESSION['fare'] = $fare;
				$_SESSION['type_of_travel'] = $type;
				$result['msg_oneway'] = "session created for oneway";
				$result['retdate'] = $returndate;
			}
			else
			{
				$result['msg'] = "error";
			}
		}
		else
		{
			if ($type == "oneside")
			{
				if (isset($_SESSION['source_return']))
				{
					$source = $data->source;
					$destination = $data->destination;
					$duration = $data->duration;
					$flight = $data->flight;
					$stops = $data->stops;
					$arrtime = $data->arrtime;
					$deptime = $data->deptime;
					$passengers = $data->passengers;
					$fare = $data->fare;
					$_SESSION['source'] = $source;
					$_SESSION['destination'] = $destination;
					$_SESSION['duration'] = $duration;
					$_SESSION['flight'] = $flight;
					$_SESSION['stops'] = $stops;
					$_SESSION['arrtime'] = $arrtime;
					$_SESSION['deptime'] = $deptime;
					$_SESSION['passengers'] = $passengers;
					$_SESSION['fare'] = $fare;
					$_SESSION['type_of_travel'] = $type;
					$result['msg'] = "session created for oneway and return";
					$result['retdate'] = $returndate;
				}
				else
				{
					$source = $data->source;
					$destination = $data->destination;
					$duration = $data->duration;
					$flight = $data->flight;
					$stops = $data->stops;
					$arrtime = $data->arrtime;
					$deptime = $data->deptime;
					$passengers = $data->passengers;
					$fare = $data->fare;
					$_SESSION['source'] = $source;
					$_SESSION['destination'] = $destination;
					$_SESSION['duration'] = $duration;
					$_SESSION['flight'] = $flight;
					$_SESSION['stops'] = $stops;
					$_SESSION['arrtime'] = $arrtime;
					$_SESSION['deptime'] = $deptime;
					$_SESSION['passengers'] = $passengers;
					$_SESSION['fare'] = $fare;
					$_SESSION['type_of_travel'] = $type;
					$result['msg'] = "session created only for oneway";
					$result['retdate'] = $returndate;
				}
			}
			else if ($type == "return")
			{
				if (isset($_SESSION['source']))
				{
					$source_return = $data->source;
					$destination_return = $data->destination;
					$duration_return = $data->duration;
					$flight_return = $data->flight;
					$stops_return = $data->stops;
					$arrtime_return = $data->arrtime;
					$deptime_return = $data->deptime;
					$passengers_return = $data->passengers;
					$fare_return = $data->fare;
					$_SESSION['source_return'] = $source_return;
					$_SESSION['destination_return'] = $destination_return;
					$_SESSION['duration_return'] = $duration_return;
					$_SESSION['flight_return'] = $flight_return;
					$_SESSION['stops_return'] = $stops_return;
					$_SESSION['arrtime_return'] = $arrtime_return;
					$_SESSION['deptime_return'] = $deptime_return;
					$_SESSION['passengers_return'] = $passengers_return;
					$_SESSION['fare_return'] = $fare_return;
					$_SESSION['type_of_travel'] = $type;
					$result['msg'] = "session created for oneway and return";
					$result['retdate'] = $returndate;
				}
				else
				{
					$source_return = $data->source;
					$destination_return = $data->destination;
					$duration_return = $data->duration;
					$flight_return = $data->flight;
					$stops_return = $data->stops;
					$arrtime_return = $data->arrtime;
					$deptime_return = $data->deptime;
					$passengers_return = $data->passengers;
					$fare_return = $data->fare;
					$_SESSION['source_return'] = $source_return;
					$_SESSION['destination_return'] = $destination_return;
					$_SESSION['duration_return'] = $duration_return;
					$_SESSION['flight_return'] = $flight_return;
					$_SESSION['stops_return'] = $stops_return;
					$_SESSION['arrtime_return'] = $arrtime_return;
					$_SESSION['deptime_return'] = $deptime_return;
					$_SESSION['passengers_return'] = $passengers_return;
					$_SESSION['fare_return'] = $fare_return;
					$_SESSION['type_of_travel'] = $type;
					$result['msg'] = "session created only for return";
					$result['retdate'] = $returndate;
				}
			}
			else
			{
				$result['msg'] = "error occured";
			}
		}
	}
	else if ($type == "traveller")
	{
		$passengers = array();
		foreach($data->data as $key => $value)
		{
			$inner = array();
			$pnr = uniqid();
			array_push($inner, $value->title);
			array_push($inner, $value->firstname);
			array_push($inner, $value->lastname);
			array_push($inner, $pnr);
			array_push($passengers, $inner);
		}

		for ($i = 0; $i < sizeof($passengers); $i++)
		{
			$title = $passengers[$i][0];
			$first = $passengers[$i][1];
			$last = $passengers[$i][2];
			$pnr = $passengers[$i][3];
			$query = "INSERT INTO travellerdetails(first,last,title,PNR) values ('$first','$last','$title','$pnr') ";
			$res = mysqli_query($conn, $query);
		}

		// $_SESSION['no_of_passenger']=sizeof($passengers);

		$result['msg'] = "sessions created";
		$_SESSION['array_of_passengers'] = $passengers;
		$result['retdate'] = $returndate;
	}
	else
	{
		$result['msg'] = "session cannot be created";
	}
}
else
{
	$result['email'] = "not_logged_in";
}

echo var_export(json_encode($result));
?>

