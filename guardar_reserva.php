
<?php

$host = 'localhost'; 
$user = 'root';    
$pass = '';          
$db = 'restaurante'; 


$conn = new mysqli($host, $user, $pass, $db);


if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $personas = $_POST['personas'];
    $comentarios = $_POST['comentarios'];


    $sql = "INSERT INTO reservas (nombre, fecha, personas, comentarios) VALUES ('$nombre', '$fecha', $personas, '$comentarios')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Reserva realizada exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }


    $conn->close();
}



?>
