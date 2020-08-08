<?php
session_start();
$data=json_decode($_POST['mydata']);
 $type=$data->type;
if($type=="traveller")
{
	$passengers=$_SESSION['array_of_passengers'];
	$result['array']=$passengers;
		
}
else
$result['msg']="session not created";
echo var_export(json_encode($result));

?>