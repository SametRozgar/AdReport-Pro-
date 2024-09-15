<?php
// delete_brand.php

// Database connection
$conn = new mysqli("localhost", "username", "password", "database");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $id = $data['id'];

  // Delete brand
  $stmt = $conn->prepare("DELETE FROM brands WHERE id = ?");
  $stmt->bind_param("i", $id);

  if ($stmt->execute()) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false]);
  }

  $stmt->close();
}

$conn->close();
?>
