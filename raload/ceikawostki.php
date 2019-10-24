<?php
session_start();
unset($_SESSION['points']);
unset($_SESSION['i']);
unset($_SESSION['j']);
unset($_SESSION['last']);
header("Location: ../pages/ciekawostki.html");
?>