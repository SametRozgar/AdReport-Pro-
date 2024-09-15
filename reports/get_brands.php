<?php
$servername = "localhost";
$username = "exenonli1_reports"; // MySQL kullanıcı adı
$password = "S.86m50t"; // MySQL şifresi
$dbname = "exenonli1_reports";

// Veritabanına bağlan
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Markaları seç
$sql = "SELECT * FROM brands";
$result = $conn->query($sql);

$brands = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $brands[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($brands);

$conn->close();
?>
