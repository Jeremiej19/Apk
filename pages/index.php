<?php
session_start();
unset($_SESSION['points']);
unset($_SESSION['i']);
unset($_SESSION['j']);
header('Location: index.html');
?>

