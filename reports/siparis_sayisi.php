<?php
require 'db_connection.php'; // Veritabanı bağlantısını dahil et

$brandId = intval($_GET['brandId']); // URL'den brandId'yi temizle ve integer'a dönüştür

// Markanın bilgilerini almak için sorgu
$query = "SELECT * FROM brands WHERE id = $brandId";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $brand = $result->fetch_assoc();
    $brandLogo = 'uploads/' . $brand['logo']; // Logo yolunu uploads klasörüne göre ayarla
    $brandName = $brand['name'];
} else {
    echo json_encode(['error' => 'Brand not found']);
    exit;
}

// Marka sipariş sayılarını almak için tablo adı oluşturma
$tableName = "reklam_verileri_$brandId";

// Tablo var mı diye kontrol et
$query = "SHOW TABLES LIKE '$tableName'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    // Tablo varsa, sipariş sayılarını getir
    $query = "SELECT SUM(google_siparis_sayisi) AS totalGoogleSiparis, 
                     SUM(meta_siparis_sayisi) AS totalMetaSiparis, 
                     SUM(tiktok_siparis_sayisi) AS totalTiktokSiparis 
              FROM $tableName";
    $result = $conn->query($query);

    if ($result) {
        $properties = $result->fetch_assoc();

        // JSON formatında cevap döndürün, logo bilgisi eklendi
        header('Content-Type: application/json');
        echo json_encode([
            'properties' => $properties,
            'brandLogo' => $brandLogo, // Logo yolunu ekleyin
            'brandName' => $brandName
        ]);
    } else {
        // Sorgu başarısız olursa
        echo json_encode(['error' => 'Query failed']);
    }
} else {
    // Tablo mevcut değilse
    echo json_encode(['error' => 'Table does not exist']);
}

$conn->close();
?>
