<?php
require_once('config.php');


$name=$_POST['name'];
$mobileno=$_POST['mobileno'];
$trip=$_POST['trip'];
$pickup=$_POST['pickup'];
$drop=$_POST['drop'];
$startdate=$_POST['startdate'];
$enddate=$_POST['enddate'];

$time=$_POST['time'];

$section=$_POST['section'];

$insert=("insert into 'firsttable' (name,mobileno,trip,pickup,drop,startdate,enddate,time,section) values ('$name','$mobileno','$trip','$pickup','$drop','$startdate','$enddate','$time','$section')");
$status=mysql_query($con,$insert);

if ($status)
{
	echo"<script> alert('success');
	window.location='index.html';
	</script>";
}
else
{
	echo"<script> alert('failed');
	window.location='index.html';
	</script>";
}


?>