<?php   
session_start(); //to ensure you are using same session
session_destroy(); //destroy the session
$result['msg']="session destroyed"; //to redirect back to "index.php" after logging out
echo var_export(json_encode($result));
?>