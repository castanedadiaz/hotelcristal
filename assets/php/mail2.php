<?
    //change this to your email.
    $to = "info@cristalpalace.com";
    $from = "info@cristalpalace.com";
    //begin of HTML message
$title="Contacto";
if(isset($_POST['Titulo'])){
$title=	$_POST['Titulo'];
}
$subject = $title;
//$to = "info@cristalpalace.com";
$message = '<div style="background-color: #666666;margin:0"><img src="http://d-test.com.ar/vyh/cristal/images/mail_header.jpg" alt="" /></div>'.
'<div style="background-color:#ea761c;padding:0;padding-left:135px"><div style="padding:25px;;font-family:Arial, _sans;font-size:.9em;background-color: #fafafa"><h3 style="color:#343434;font-size:1.1em;">'.$title.'</h3><br />';
if(isset($_POST)){
	foreach ($_POST as $nombre_campo => $valor) {
		if($valor!="" && $nombre_campo!='Titulo' && $nombre_campo!='Comentarios'){
		$message .='<p style="line-height:80%">'. $nombre_campo . ':<b style="color:#343434"> ' . $valor . '</b></p>';
		}else if( $nombre_campo=='Comentarios'){
		$message .='<p style="line-height:120%;width:80%">'. $nombre_campo . ':<b style="color:#343434"> ' . $valor . '</b></p>';	
		}
	}
}
$message .= '<br /></div ></div><hr /><br /><span style="font-family:Arial;color:#181818;font-size:.9em">&nbsp;&nbsp;Ciudad de la Paz 2550 - Bs. As. Argentina - Tel.: (54-11) 4786-1700<br />&nbsp;&nbsp;www.cristalpalace.com - info@cristalpalace.com</span>';
    
   //end of message
    $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";

    //options to send to cc+bcc
    //$headers .= "Bcc: gustavo@grupolevinson.com.ar\r\n";
    
    // now lets send the email.
  mail($to, $subject, $message, $headers);
    echo "  Mail enviado....!";
    //echo $message;
?> 