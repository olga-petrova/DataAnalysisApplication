<?php
/**
* This example explains a bit how to do the calculations on the backend.
* You could also choose to use an OLAP server to do the calculations for you.
* You just need to return the proper JSON file back to the pivot grid.
*
* In this example pivot filtering (label, value and top10) was not implemented.
*
* Import the dataset.sql file in your MySql database and give it a try.
* Don't forget to properly configure the MySql credentials.
*
*/


$dbHostname = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbDatabase = 'test';

header('Content-Type: application/json; charset=utf-8');

global $HTTP_RAW_POST_DATA;
$params = json_decode($HTTP_RAW_POST_DATA, true);
$industry_type = htmlspecialchars($params["industry_type"]);
$occupation = htmlspecialchars($params["occupation"]);

$conn = mysql_connect($dbHostname, $dbUser, $dbPass);

mysql_select_db($dbDatabase, $conn);

$sql = "call get_best_state('$industry_type', '$occupation')";

$result = mysql_query($sql, $conn);
$row = mysql_fetch_array($result);
$response = array(
    'success'   => true,
    'state'   => $row['state']
);

mysql_close($conn);
echo json_encode($response);

?>
