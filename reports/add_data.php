<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "marka_veritabani";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$brandId = $_POST['brandId'];
$month = $_POST['month'];
$adBudget = $_POST['adBudget'];
$adRevenue = $_POST['adRevenue'];
$totalRevenue = $_POST['totalRevenue'];
$organicRevenue = $_POST['organicRevenue'];
$adProfit = $_POST['adProfit'];
$roi = $_POST['roi'];
$roas = $_POST['roas'];

$sql = "INSERT INTO veriler (marka_id, ay, reklam_butcesi, reklam_cirosu, toplam_ciro, organik_ciro, reklam_getiri_miktari, reklam_getirisinin_ciroya_orani, roas)
        VALUES ('$brandId', '$month', '$adBudget', '$adRevenue', '$totalRevenue', '$organicRevenue', '$adProfit', '$roi', '$roas')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();
?>
