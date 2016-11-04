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

global $_POST;
if (isset($_POST["industry_type"])) {
    $industry_type = htmlspecialchars($_POST["industry_type"]);
} else {
  $industry_type = null;
}
if (isset($_POST["occupation"])) {
  $occupation = htmlspecialchars($_POST["occupation"]);
} else {
  $occupation = null;
}

$conn = mysql_connect($dbHostname, $dbUser, $dbPass);

mysql_select_db($dbDatabase, $conn);
if ($industry_type && $occupation) {
    $sql = "call average_incomes('$industry_type', '$occupation')";
} else {
  $sql = "call average_incomes(NULL, NULL)";
}

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
