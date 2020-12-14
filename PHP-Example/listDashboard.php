<?php
   include_once "includes/header.php";
   require_once "includes/addListProcess.php";
   require_once "includes/listProcessing.php";
    require "includes/editListProcess.php";


if (isset($_POST['submit'])) {
   //Variable to verify user input
   $success = false;

   //Pull the username and password from the input
   $username = $_POST['username'];
   $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

   $isCorrectPassword = password_verify($_POST['password'], $password);
   //Hashing the password for security
   if ($isCorrectPassword) {
      $_SESSION['passwordHash'] = $password;
      $_SESSION['actualPassword'] = $_POST['password'];

      //Creates session variables for the username
      $_SESSION['username'] = $username;

      //SQL command
      $sql_find = "SELECT * FROM `login` WHERE login_uname = '$username'";

      $result = $conn->query($sql_find);

      if (!$result) {
         die("Query was not successful" . $conn->error);
      }

      if ($result->num_rows > 0) {
         $success = true;
      } else {
         $_SESSION['failed'] = true;
      }
   }
   else {

      header('Location: ../login.php');
   }

   //Verifies success of login
   $_SESSION['success'] = $success;

   if ($_SESSION['success']) {
      $user = "SELECT * FROM `users` JOIN `login` WHERE users_id = login_user_id AND login_uname = '$username'";

      $userInfo = $conn->query($user);

      if ($userInfo->num_rows > 0) {
         while ($row = $userInfo->fetch_array()) {
            $_SESSION['userID'] = $row[0];
            $_SESSION['fname'] = $row[1];
            $_SESSION['lname'] = $row[2];
            $_SESSION['phone'] = $row[3];
            $_SESSION['email'] = $row[4];
            $userType = $row[5];
         }
      }

      if (!isset($_SESSION['fname'])) {
         die("Did not find name of user" . $conn->error);
      }

      if ($userType == '0'){
          $_SESSION['userType'] = 'admin';
      }

      if($_SESSION['success'] == true) {
         header('Location: ../listDashboard.php');
      } else {
         header('Location: ../login.php');
      }
   }
}


?>
<!DOCTYPE html>
<html lang="en">
   <head>
   <title>List Dashboard</title>
   <meta charset="utf-8">
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
      <body>
         <main class="main">
            <div style="padding-top: 75px;">
         <?php
         if (!$_SESSION['success']) {
            echo '<h2>Please login to see your list dashboard</h2></br></br>';
            echo '<p>You cannot view lists if you are not logged in</p>';
         }
         else {
         ?>
            </div>
             <h1><?php echo $_SESSION['fname'] ?> 's List Dashboard</h1>
             <p>Welcome to your dashboard! <br> Here you will find all the lists you have created and have the option to
                 modify, archive or delete them as you please. </p>

            <?php

            $getAllLists = "SELECT `list_id`, `list_name`, `list_archived` FROM alllists JOIN users WHERE `list_user_id` = `users_id` AND `users_fname` = '{$_SESSION['fname']}'";
            $result = $conn->query($getAllLists);

            if (!$conn->query($getAllLists)) {
               die ("It didn't work" . $conn->error);
            }

            if ($result->num_rows > 0) {
               echo "<div style='color: #4e555b; padding-top: 35px;'>";
               echo "<h5 style='font-style: oblique;'>Your Lists</h5>";
               echo "<ul style='list-style: none;'><br>";

               //Prints out all the lists of the user
               while ($row = $result->fetch_assoc()) {
                  $listName = $row["list_name"];
                  $archived = $row["list_archived"];
                  $listID= $row["list_id"];

                  if ($archived == 1) {
                     echo "<li><span class='complete'>" . $listName . "<br>";
                  } else {
                     echo "<li><span style='font-variant: small-caps; font-weight: bold;'>" . $listName . "</span><br>";
                  }

                  if ($archived == 1) {
                     echo "</span>";
                     echo "<a href='listDashboard.php?listComplete={$listName}&finished=1' style='color: #2374AB;'>Re-activate List </a>";
                     echo "| <a href='listDashboard.php?listDelete={$listName}&id={$listID}' style='color: #2374AB;'>Delete List </a><br>";
                  } else {
                     echo "<a href= 'index.php?listName={$listName}&id={$listID}' style='color: #2374AB;'>Add to list </a>";
                     echo "| <a href='editList.php?listName={$listName}&id={$listID}' style='color: #2374AB;'> Edit List </a>";
                     echo "| <a href='listDashboard.php?listComplete={$listName}&finished=0' style='color: #2374AB;'>Archive List </a>";
                     echo "| <a href='listDashboard.php?listDelete={$listName}&id={$listID}' style='color: #2374AB;'>Delete List </a><br>";
                  }

                  //Closes the list item
                  echo "</li>";
               } // while loop ends

               //Close of unordered list
               echo "</ul>";
            } else {
               echo "<br>";
               echo "<h4>You have not created any lists</h4>";
               echo "<p>Do you want to create a list?</p>";
            }

            echo "<br><button style='display: block; border-radius: 5px; min-width: 200px; background-color: lightgray;' type='button' value='Create a new list now!'><a href='addList.php' style='text-decoration: none; color: #1b1e21;'>Create a new list now!</a></button>";
            }
         ?>

         </main>
      </body>
</html>

   <?php
      include "includes/footer.php";
   ?>
