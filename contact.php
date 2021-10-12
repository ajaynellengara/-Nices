<?php
$name=@$_REQUEST['name'];
$namelast=@$_REQUEST['lastname'];

$email=@$_REQUEST['email'];
$phone=@$_REQUEST['phone'];
$message=@$_REQUEST['message'];
$sub=@$_REQUEST['subject'];



	
if(isset($_REQUEST['name']) && $_REQUEST['email'])
{
$to			=	"ajayndesigner@gmail.com";

$subject	=	"#Nices website enquiry - Gitproject";
$content   	=	'<table width="500" border="0" cellspacing="2" cellpadding="2" style="border:2px solid #DFDFBF">
	<tr>
    <td colspan="2" style="background-color:#F8F8EF"><div align="center"><strong><font color="#0066CC">Contact Form</font></strong> </div></td>
  </tr>
  <tr>
    <td width="103">First Name : </td>
    <td width="381">'.$name.'</td>
  </tr>
  <tr>
  <td>Last Name : </td>
  <td>'.$lastname.'</td>
</tr>
  <tr>
    <td>Email : </td>
    <td>'.$email.'</td>
  </tr>
   <tr>
    <td>Phone : </td>
    <td>'.$phone.'</td>
  </tr> 
    <tr>
    <td>Subject : </td>
    <td>'.$sub.'</td>
  </tr> 
  <tr>
    <td>Message : </td>
    <td>'.nl2br($message).'</td>
  </tr>
 
</table>';

$mailsend					=	send_mail($to,$subject,$content);

}




function send_mail( $mail_to , $mail_subject , $mail_content , $mail_cc = "" , $mail_from = ""  , $mail_from_name = "" , $mail_attachment = "" , $mail_bcc = "" )
	{
		$mail_from 				= 	$mail_from ? $mail_from : NOREPLY_MAIL;
		$mail_from_name 		= 	$mail_from ? $mail_from_name : NOREPLY_NAME;
		$mail_bcc			 	= 	$mail_bcc ? $mail_bcc : BCC_MAIL;
		
		 $headers = 'From: #Nices website enduiry <ajayndesigner@gmail.com>' . "\r\n" ;
    	 	$headers .='X-Mailer: PHP/' . phpversion();
    	$headers .= "MIME-Version: 1.0\r\n";
    	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";   
				
	
		// Additional headers
		//$mail             = new PHPMailer(); // defaults to using php "mail()"
		//echo  $mail_content;
		//exit;
		
	$flag = mail($mail_to, $mail_subject, $mail_content, $headers);
	
	//$flag = mail('bastin123@gmail.com', $mail_subject, $mail_content, $headers);	
		
		return $flag;
	}
	
	
    header("Location: thanks.html"); 
	// header("<script type='text/javascript'>alert('submitted successfully!')</script>"); 
exit();
?>