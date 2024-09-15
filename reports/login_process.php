<?php
session_start();

$servername = "";
$username = "";
$password = "";
$dbname = "";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

// Admin kullanıcı adı ve şifre
$adminUsername = 'Exenonline';
$adminPassword = 'S.86m50t';

// Admin kontrolü
if ($username == $adminUsername && $password == $adminPassword) {
    $_SESSION['user'] = 'admin';
    header('Location: dashboard.html'); // Admin paneline yönlendir
    exit();
}

// Normal kullanıcı kontrolü
$sql = "SELECT * FROM markalar WHERE marka_adi='$username' AND marka_sifresi='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $_SESSION['user'] = $username;
    header('Location: dashboard.html'); // Kullanıcı paneline yönlendir
} else {
    echo "Invalid username or password";
}

$conn->close();
?>
