
<?php
include 'conexion.php';
session_start();

$user = $_POST['username'];
$pass = $_POST['password'];

// Verificar usuario en la base de datos
$sql = "SELECT password FROM usuarios WHERE username = '$user'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Usuario encontrado, verificar contraseña
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])) {
        // Redirigir a index.html
        header("Location: index.html");
        exit();
    } else {
        echo "Contraseña incorrecta. <a href='login.html'>Intenta nuevamente</a>";
    }
} else {
    echo "Usuario no encontrado. <a href='registro.html'>Regístrate aquí</a>";

    $conn->close();
}
?>
