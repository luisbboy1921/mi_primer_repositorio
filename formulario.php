
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "proyecto";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Aquí puedes realizar operaciones con la base de datos

// Cerrar la conexión
echo "Hola mundo";

echo "Segundo cambio";
$conn->close();
?>
```
