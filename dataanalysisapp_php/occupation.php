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

global $_GET;
$params = $_GET;
$industry_type = htmlspecialchars($params["industry_type"]);
$q = htmlspecialchars($params["q"]);

$conn = mysql_connect($dbHostname, $dbUser, $dbPass);

mysql_select_db($dbDatabase, $conn);

$sql = "call get_occupation('$industry_type', '$q')";


$result = mysql_query($sql, $conn);
$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}
$response = array(
    'success'   => true,
    'data'   => $rows
);

mysql_close($conn);
echo json_encode($response);

?>
