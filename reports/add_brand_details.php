<?php
// Veritabanı bağlantısını dahil et
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Form verilerini al
    $brand_id = $_POST['brand_id'];
    $month = $_POST['month'];
    $ad_budget = $_POST['ad_budget'];
    $ad_revenue = $_POST['ad_revenue'];
    $total_revenue = $_POST['total_revenue'];
    $organic_revenue = $_POST['organic_revenue'];
    $ad_return_amount = $_POST['ad_return_amount'];
    $ad_return_percent = $_POST['ad_return_percent'];
    $roas = $_POST['roas'];

    // Veritabanına ekleme
    $stmt = $conn->prepare("INSERT INTO brand_details (brand_id, month, ad_budget, ad_revenue, total_revenue, organic_revenue, ad_return_amount, ad_return_percent, roas)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $brand_id, $month, $ad_budget, $ad_revenue, $total_revenue, $organic_revenue, $ad_return_amount, $ad_return_percent, $roas);

    if ($stmt->execute()) {
        echo "New details added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
