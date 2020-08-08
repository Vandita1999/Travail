<?php
include_once("dbconnect.php");
session_start(); 
$data=json_decode($_POST['mydata']);
$type=$data->type;

if($type=="login")
{
  $emails=$data->emails;
  $passwords=$data->passwords;
  $query="SELECT * FROM signup WHERE email = '$emails' AND password ='$passwords'";
  $res=mysqli_query($conn,$query);

  if(mysqli_num_rows($res)>0)
  {
    $result['msg']="logged in";  
    $_SESSION['email_session']=$emails;
    $emailnew=$_SESSION['email_session'];
  }
  else
  {
    $result['msg']="not Logged In";
  }
  echo var_export(json_encode($result));
}

else
{
  $first=$data->firstsign;
  $last=$data->lastsign;
  $email=$data->emailsign;
  $mobile=$data->mobilesign;
  $password=$data->passsign;
  $copypass=$data->copypass;
  $query = mysqli_query($conn,"SELECT email FROM signup WHERE email = '$email'");
  $query1 = mysqli_query($conn,"SELECT mobile FROM signup WHERE mobile = '$mobile'");

if(mysqli_num_rows($query)>0)
{
  if(mysqli_num_rows($query1)>0)
  {
    $result['msg']="erroremailmobile";
  }
  else
    $result['msg']="erroremail";
}
else
{
   if(mysqli_num_rows($query1)>0)
  {
    $result['msg']="errormobile";
  }
  else
  {
    
    $res2=mysqli_query($conn,"INSERT INTO signup(first,last,email,mobile,password) VALUES ('$first','$last','$email','$mobile','$password')");
    if($res2)
    {
       $result['msg']="inserted";
       $_SESSION['email_session']=$email;
    }
    else
      $result['msg']="error";

  }
}
echo var_export(json_encode($result));
}

?>