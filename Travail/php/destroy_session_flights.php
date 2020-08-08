
<?php
session_start(); //unsetting all flights variable on caliing search button
unset($_SESSION['source']);
unset($_SESSION['destination']);
unset($_SESSION['duration']);
unset($_SESSION['flight']);
unset($_SESSION['flight']);
unset($_SESSION['stops']);
unset($_SESSION['arrtime']);
unset($_SESSION['deptime']);
unset($_SESSION['passengers']);
unset($_SESSION['fare']);
unset($_SESSION['source_return']);
unset($_SESSION['destination_return']);
unset($_SESSION['duration_return']);
unset($_SESSION['flight_return']);
unset($_SESSION['stops_return']);
unset($_SESSION['arrtime_return']);
unset($_SESSION['deptime_return']);
unset($_SESSION['passengers_return']);
unset($_SESSION['fare_return']);
unset($_SESSION['type_of_travel']);
unset($_SESSION['returndate']);

?>