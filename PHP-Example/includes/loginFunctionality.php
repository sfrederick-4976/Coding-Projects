<?php

if (isset($_POST['submit'])) {
   //Variable to verify user input
   $success = false;

   //Pull the username and password from the input
   $username = $_POST['username'];
   $_SESSION['actualPassword'] = $_POST['password'];

//   //Hashing the password for security
   $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

   //verifying hashed password
   $isCorrectPassword = password_verify($_POST['password'], $password);

   //If password is verified
   if ($isCorrectPassword) {
      $_SESSION['password'] = $password;

      //Creates session variables for the username
      $_SESSION['username'] = $username;

      //SQL command
      $sql_find = "SELECT * FROM `login` WHERE login_uname = '$username'";

      $result = $conn->query($sql_find);

      //Ensures the query was successful
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
      $_SESSION['failed'] = true;
      header('Location: login.php');
   }

   //Verifies success of login
   $_SESSION['success'] = $success;

   //Once login is verified, queries the database for user information
   if ($_SESSION['success']) {
      $user = "SELECT * FROM `users` JOIN `login` WHERE users_id = login_user_id AND login_uname = '$username'";

      $userInfo = $conn->query($user);

      //Sets user information for the session
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

      //Checks user type and sets administrator privaleges
      if ($userType == '0'){
         $_SESSION['userType'] = 'admin';
      }

      //Redirects when complete to appropriate destination
      if($_SESSION['success'] == true) {
         header('Location: listDashboard.php');
      } else {
         header('Location: ../login.php');
      }
   }
}
?>