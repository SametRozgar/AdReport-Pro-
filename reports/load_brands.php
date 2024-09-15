<?php
// load_brands.php

// Database connection
$conn = new mysqli("localhost", "username", "password", "database");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM brands";
$result = $conn->query($sql);

$brands = [];
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $brands[] = $row;
  }
}

echo json_encode(['brands' => $brands]);

$conn->close();
?>
