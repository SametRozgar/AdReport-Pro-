<?php
// Veritabanı bağlantısını dahil et
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $brandName = $_POST['brandName'];
    $brandPassword = $_POST['brandPassword'];
    
    // Dosya yükleme işlemi
    if (isset($_FILES['brandLogo']) && $_FILES['brandLogo']['error'] == 0) {
        $logoTmpName = $_FILES['brandLogo']['tmp_name'];
        $logoName = basename($_FILES['brandLogo']['name']);
        $uploadDir = './uploads/';
        $uploadFile = $uploadDir . $logoName;

        if (move_uploaded_file($logoTmpName, $uploadFile)) {
            // Marka bilgilerini ekle
            $stmt = $conn->prepare("INSERT INTO brands (name, password, logo) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $brandName, $brandPassword, $logoName);
            
            if ($stmt->execute()) {
                // Kullanıcıyı ekle
                $stmtUser = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, 'user')");
                $stmtUser->bind_param("ss", $brandName, $brandPassword);

                if ($stmtUser->execute()) {
                    echo "Brand and user added successfully.";
                } else {
                    echo "Error adding user: " . $stmtUser->error;
                }
                
                $stmtUser->close();
            } else {
                echo "Error adding brand: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Error moving uploaded file.";
        }
    } else {
        echo "No file uploaded or file upload error.";
    }
}

$conn->close();
?>
