<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $brandId = $_POST['brandId'];
    $ay = $_POST['ay'];
    $yil = $_POST['yil'];
    $googleHarcama = $_POST['googleHarcama'];
    $metaHarcama = $_POST['metaHarcama'];
    $tiktokHarcama = $_POST['tiktokHarcama'];
    $googleReklamGeliri = $_POST['googleReklamGeliri'];
    $metaReklamGeliri = $_POST['metaReklamGeliri'];
    $tiktokReklamGeliri = $_POST['tiktokReklamGeliri'];
    $organikGelir = $_POST['organikGelir'];
    $satilanUrunAdedi = $_POST['satilanUrunAdedi'];
    $siparisSayisi = $_POST['siparisSayisi'];
    $organikZiyaretci = $_POST['organikZiyaretci'];
    $metaZiyaretci = $_POST['metaZiyaretci'];
    $googleZiyaretci = $_POST['googleZiyaretci'];
    $tiktokZiyaretci = $_POST['tiktokZiyaretci'];
    $googleSiparisSayisi = $_POST['googleSiparisSayisi'];
    $metaSiparisSayisi = $_POST['metaSiparisSayisi'];
    $tiktokSiparisSayisi = $_POST['tiktokSiparisSayisi'];
    $metaSiparisUrunSayisi = $_POST['metaSiparisUrunSayisi'];
    $googleSiparisUrunSayisi = $_POST['googleSiparisUrunSayisi'];
    $tiktokSiparisUrunSayisi = $_POST['tiktokSiparisUrunSayisi'];

    $tableName = "reklam_verileri_" . $brandId;

    $createTableQuery = "
        CREATE TABLE IF NOT EXISTS $tableName (
            id INT AUTO_INCREMENT PRIMARY KEY,
            ay VARCHAR(255) NOT NULL,
            yil INT NOT NULL,
            google_harcama INT NOT NULL,
            meta_harcama INT NOT NULL,
            tiktok_harcama INT NOT NULL,
            google_reklam_geliri INT NOT NULL,
            meta_reklam_geliri INT NOT NULL,
            tiktok_reklam_geliri INT NOT NULL,
            organik_gelir INT NOT NULL,
            satilan_urun_adedi INT NOT NULL,
            siparis_sayisi INT NOT NULL,
            organik_ziyaretci INT NOT NULL,
            meta_ziyaretci INT NOT NULL,
            google_ziyaretci INT NOT NULL,
            tiktok_ziyaretci INT NOT NULL,
            google_siparis_sayisi INT NOT NULL,
            meta_siparis_sayisi INT NOT NULL,
            tiktok_siparis_sayisi INT NOT NULL,
            meta_siparis_urun_sayisi INT NOT NULL,
            google_siparis_urun_sayisi INT NOT NULL,
            tiktok_siparis_urun_sayisi INT NOT NULL,
            kayit_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ";

    if ($conn->query($createTableQuery) === TRUE) {
        $insertQuery = "
            INSERT INTO $tableName 
            (ay, yil, google_harcama, meta_harcama, tiktok_harcama, google_reklam_geliri, meta_reklam_geliri, tiktok_reklam_geliri, organik_gelir, satilan_urun_adedi, siparis_sayisi, organik_ziyaretci, meta_ziyaretci, google_ziyaretci, tiktok_ziyaretci, google_siparis_sayisi, meta_siparis_sayisi, tiktok_siparis_sayisi, meta_siparis_urun_sayisi, google_siparis_urun_sayisi, tiktok_siparis_urun_sayisi)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ";

        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("siiiiiiiiiiiiiiiiiiii", $ay, $yil, $googleHarcama, $metaHarcama, $tiktokHarcama, $googleReklamGeliri, $metaReklamGeliri, $tiktokReklamGeliri, $organikGelir, $satilanUrunAdedi, $siparisSayisi, $organikZiyaretci, $metaZiyaretci, $googleZiyaretci, $tiktokZiyaretci, $googleSiparisSayisi, $metaSiparisSayisi, $tiktokSiparisSayisi, $metaSiparisUrunSayisi, $googleSiparisUrunSayisi, $tiktokSiparisUrunSayisi);

        if ($stmt->execute()) {
            echo "Veri başarıyla eklendi.";
        } else {
            echo "Veri eklerken hata oluştu: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Tablo oluşturulurken hata oluştu: " . $conn->error;
    }

    $conn->close();
}
?>
