<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />

<?php //<!-- CSS --> ?>

<link rel="stylesheet" type="text/css" href="css/lightbox.css" /> <?php //<!-- lightbox --> ?>

</head>

<body>

<a href="pages/test.php" rel="license" onclick="javascript:return(false)" class="lightbox" title="Cliquez pour faire apparaître la lightbox !" style="cursor: pointer;">Cliquez pour faire apparaître la lightbox !</a>
						
			<?php //<!-- LIGHTBOX --> ?>
			<div id="bgPopup"></div>
			<div id="Popup"><div id="my_logo"></div><div id="fermer" style=""><img src="images/icones/closebox.png" alt="fermer la fenêtre" title="Fermer la fenêtre" /></div>
			<div id="contenu"></div><div id="load"></div></div>
			<?php //<!-- FIN --> ?>

<?php //<!-- JAVASCRIPT --> ?>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript" src="js/lightbox_TTM.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>

</body>

</html>