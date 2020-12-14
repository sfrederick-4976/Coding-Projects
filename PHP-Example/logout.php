<?php

   include_once "includes/header.php";

   //Checks if logout was successful before destroying the session...SOMETIMES HAS TO BE TRIED MORE THAN ONCE...
   if($_GET['logout'] == true) {
      session_destroy();
      header('Location: login.php');
      }
?>

   <!DOCTYPE html>
   <html lang="en">
   <head>
      <title>Logout Page</title>
      <meta charset="utf-8">
      <!-- Bootstrap core CSS / CDN -->
      <!-- Used from https://www.getbootstrap.com, 29 January 2019 -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      <!-- Custom CSS styles -->
      <link rel="stylesheet" href="css/styles.css">
      <!--CodePen CSS for Login -->
      <!--Used from https://codepen.io/ace-subido/pen/Cuiep, 8 March, 2020 -->
      <link rel="stylesheet" href="css/bootstrap_styles.css">
   </head>
   <body>
   <main class="container main">
      <div style="padding-top: 100px;">
         <!--Confirmation that the user would like to actually log out-->
         <h4>Are you sure you want to log out?</h4>
         <form action="index.php" method="GET" name = "logout" id="logout" class="logout">
            <button><a href="logout.php?logout=true" style="text-decoration: none; color: #1b1e21;">Confirm Log out</a></button>
         </form>
      </div>
   </main>
   </body>
   </html>

<?php include "includes/footer.php"; ?>