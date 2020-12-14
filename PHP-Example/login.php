<?php
   include_once "includes/header.php";
   require "db/db.php";
   include_once "includes/loginFunctionality.php";

?>

<head>
    <title>Log In Page</title>
    <!-- Bootstrap core CSS -->
    <!-- Used from https://www.getbootstrap.com, 29 January 2019 -->
    <link href="css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

    <!-- Custom CSS styles -->
    <link rel="stylesheet" href="css/styles.css">

    <!-- Bootstrap linking -->
    <!-- Used from https://getbootstrap.com/, April 9, 2020 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!--CodePen CSS for Login -->
    <!--Used from https://codepen.io/ace-subido/pen/Cuiep, 8 March, 2020 -->
    <link rel="stylesheet" href="css/codePen_styles.css">
</head>

<main class="main">
   <!--Functionality not applied. Side section to allow new users to sign up-->
   <div style="float: left; padding-top: 100px; margin-right: 20px; display: block; width: 40%; height: 400px; background-color: lightblue; color: ivory; margin-top: 70px; padding-left: 20px; padding-right: 40px;">
        <h1>Welcome back!</h1>
        <br>
       <p>To access your account and your lists, please login with your personal information! </p>
       <br>
       <button type="submit" id="signUp" name ="signUp" value="Sign Up Here!">Sign Up Here!</button>
       <p style="font-size: .75em;">Haven't signed up yet?</p>
   </div>

    <!--Used from https://catalin.red/simple-and-effective-dropdown-login-box/, 8 March 2020-->
    <!--Login form checking username and password input.  Modified-->
    <div id="login-content" style="float: right; padding-top: 100px; padding-left: 75px; margin-right: 200px; display: block; width: 40%; height: 400px;">
      <h3>Log In</h3>
       <h6>Please enter your username and password</h6>
      <form method = POST name ="submit" action='
      <?php
         if($_SESSION['success']){
         header('includes/loginFunctionality.php');
      }
      ?>'>
         <fieldset id="inputs">
            <input  id="username" type="text" name="username" placeholder="Your email address" required>
            <input  id="password" type="password" name="password" placeholder="Password" required>
         </fieldset>
         <fieldset id="actions" name = "submit">
            <button type="submit" id="submit" name ="submit" value="Log in" href="includes/loginFunctionality.php">Log in</button>
            <?php

            ?>
         </fieldset>
         <fieldset><?php
            if ($_SESSION['failed']){
               echo "<p style='color: darkred;'>Username or password did not match records.  Please try again</p>";
            }
            ?></fieldset>
      </form>
       <!--End of log in form from https://catalin.red/simple-and-effective-dropdown-login-box/-->
   </div>
</main>


<?php include "includes/footer.php" ?>