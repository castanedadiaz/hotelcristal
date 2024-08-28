<?php
// Dirección de correo electrónico del destinatario
$destinatario = 'info@cristalpalace.com'; // Cambia esto a tu dirección de correo electrónico

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar los datos del formulario
    $nombre = isset($_POST['Nombre']) ? htmlspecialchars(trim($_POST['Nombre'])) : '';
    $apellido = isset($_POST['Apellido']) ? htmlspecialchars(trim($_POST['Apellido'])) : '';
    $empresa = isset($_POST['Empresa']) ? htmlspecialchars(trim($_POST['Empresa'])) : '';
    $nombreE = isset($_POST['NombreE']) ? htmlspecialchars(trim($_POST['NombreE'])) : '';
    $emailE = isset($_POST['EmailE']) ? htmlspecialchars(trim($_POST['EmailE'])) : '';
    $pais = isset($_POST['Pais']) ? htmlspecialchars(trim($_POST['Pais'])) : '';
    $ciudad = isset($_POST['Ciudad']) ? htmlspecialchars(trim($_POST['Ciudad'])) : '';
    $email = isset($_POST['Email']) ? htmlspecialchars(trim($_POST['Email'])) : '';
    $telefono = isset($_POST['Telefono']) ? htmlspecialchars(trim($_POST['Telefono'])) : '';
    $habitacion = isset($_POST['Habitacion']) ? htmlspecialchars(trim($_POST['Habitacion'])) : '';
    $from = isset($_POST['from']) ? htmlspecialchars(trim($_POST['from'])) : '';
    $to = isset($_POST['to']) ? htmlspecialchars(trim($_POST['to'])) : '';
    $adultos = isset($_POST['Adultos']) ? htmlspecialchars(trim($_POST['Adultos'])) : '';
    $menores = isset($_POST['Menores']) ? htmlspecialchars(trim($_POST['Menores'])) : '';
    $cochera = isset($_POST['Cochera']) ? htmlspecialchars(trim($_POST['Cochera'])) : '';
    $comentarios = isset($_POST['Comentarios']) ? htmlspecialchars(trim($_POST['Comentarios'])) : '';

    // Validación de campos obligatorios
    if (empty($nombre) || empty($apellido) || empty($pais) || empty($email) || empty($habitacion) || empty($from) || empty($to) || empty($adultos)) {
        echo "Por favor, completa todos los campos obligatorios.";
        exit();
    }

    // Mapeo de valores de habitación a nombres
    $habitaciones = [
        "1" => "DOBLE MATRIMONIAL",
        "2" => "SINGLE",
        "3" => "DOBLE",
        "4" => "TRIPLE"
    ];
    $habitacionNombre = isset($habitaciones[$habitacion]) ? $habitaciones[$habitacion] : "No especificada";

    // Configurar el asunto y el cuerpo del mensaje en formato HTML
    $asunto = "Solicitud de Reserva de $nombre $apellido";
    $cuerpo = "
    <html>
    <body style='font-family: Arial, sans-serif; margin: 0; padding: 0; font-size: 15px'>
        <div style='background-color: #031f30; padding: 10px; text-align: center;'>
        <h2 style='color: #ffffff; '>NUEVA SOLICITUD DE RESERVA</h2>
        </div>
        <div style='margin: 20px; padding: 10px; border: 2px solid #031f30; border-radius: 12px;'>
            <h2 style='color: #031f30;'>Datos del Huesped</h2>
            <ul style='list-style: none; padding: 0;'>
                <li style='margin-bottom: 10px;'><strong>Nombre:</strong> $nombre</li>
                <li style='margin-bottom: 10px;'><strong>Apellido:</strong> $apellido</li>
                <li style='margin-bottom: 10px;'><strong>Empresa:</strong> $empresa</li>
                " . ($empresa === 'si' ? "<li style='margin-bottom: 10px;'><strong>Nombre de la Empresa:</strong> $nombreE</li>
                <li style='margin-bottom: 10px;'><strong>Email de la Empresa:</strong> $emailE</li>" : "") . "
                <li style='margin-bottom: 10px;'><strong>Pais:</strong> $pais</li>
                <li style='margin-bottom: 10px;'><strong>Ciudad:</strong> $ciudad</li>
                <li style='margin-bottom: 10px;'><strong>Email:</strong> $email</li>
                <li style='margin-bottom: 10px;'><strong>Telefono:</strong> $telefono</li>
            </ul>
        </div>
        <div style='margin: 20px; padding: 10px; border: 2px solid #031f30; border-radius: 12px;'>
            <h2 style='color: #031f30;'>Solicitud de Reserva</h2>
            <ul style='list-style: none; padding: 0;'>
                <li style='margin-bottom: 10px;'><strong>Habitación:</strong> $habitacionNombre</li>
                <li style='margin-bottom: 10px;'><strong>Llegada:</strong> $from</li>
                <li style='margin-bottom: 10px;'><strong>Partida:</strong> $to</li>
                <li style='margin-bottom: 10px;'><strong>Cantidad de Adultos:</strong> $adultos</li>
                <li style='margin-bottom: 10px;'><strong>Cantidad de Niños:</strong> $menores</li>
                <li style='margin-bottom: 10px;'><strong>Cochera:</strong> $cochera</li>
                <li style='margin-bottom: 10px;'><strong>Comentarios:</strong> $comentarios</li>
            </ul>
        </div>
    </body>
    </html>";

    // Configurar los headers del correo para contenido HTML
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        // Redirigir a una página de éxito si el correo se envió correctamente
        header("Location: exito.html");
        exit();
    } else {
        echo "Error al enviar el correo. Por favor, intenta nuevamente.";
    }
} else {
    // Redirigir a la página del formulario si se accede directamente al archivo PHP
    header("Location: index.html");
    exit();
}
?>
