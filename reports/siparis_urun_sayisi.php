<?php
require 'db_connection.php';

$brandId = intval($_GET['brandId']);

$query = "SELECT * FROM brands WHERE id = $brandId";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $brand = $result->fetch_assoc();
    $brandLogo = 'uploads/' . $brand['logo'];
    $brandName = $brand['name'];
} else {
    echo json_encode(['error' => 'Brand not found']);
    exit;
}

$tableName = "reklam_verileri_$brandId";

$query = "SHOW TABLES LIKE '$tableName'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $query = "SELECT SUM(google_siparis_urun_sayisi) AS totalGoogleSiparisUrunSayisi, 
                     SUM(meta_siparis_urun_sayisi) AS totalMetaSiparisUrunSayisi, 
                     SUM(tiktok_siparis_urun_sayisi) AS totalTiktokSiparisUrunSayisi 
              FROM $tableName";
    $result = $conn->query($query);

    if ($result) {
        $properties = $result->fetch_assoc();
        header('Content-Type: application/json');
        echo json_encode([
            'properties' => $properties,
            'brandLogo' => $brandLogo,
            'brandName' => $brandName
        ]);
    } else {
        echo json_encode(['error' => 'Query failed']);
    }
} else {
    echo json_encode(['error' => 'Table does not exist']);
}

$conn->close();
?>
