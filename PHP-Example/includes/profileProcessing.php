<?php

/*
 * Once the editing of the profile is submitted
 */
if(isset($_POST['profileChanges'])){


   //Checks that the content entered is not empty and is not the same as what is already in the database
   if($_POST['firstName'] != $_SESSION['fname'] && $_POST['firstName'] != ""){
      $enteredFirstName = htmlspecialchars(stripslashes(trim($_POST['firstName'])));

      //Query to set both first and last name to input value
      $updateFirstName = "UPDATE users SET `users_fname` = '{$enteredFirstName}' WHERE `users_id` = '{$_SESSION['userID']}'";

      if(! $conn->query($updateFirstName)) {
         die("First name could not be updated" . $conn->error);
      }

      //Reset session variable
      $_SESSION['fname'] = $enteredFirstName;
   }

   //Checks that the content entered is not empty and is not the same as what is already in the database
   if($_POST['lastName'] != $_SESSION['lname'] && $_POST['lastName'] != ""){
      $enteredLastName = htmlspecialchars(stripslashes(trim($_POST['lastName'])));

      //Query to set both first and last name to input value
      $updateLastName = "UPDATE users SET `users_lname` = '{$enteredLastName}' WHERE `users_id` = '{$_SESSION['userID']}'";

      if(! $conn->query($updateLastName)) {
         die("Last name could not be updated" . $conn->error);
      }

      //Reset session variable
      $_SESSION['lname'] = $enteredLastName;
   }



   //Checks that the content entered is not empty and is not the same as what is already in the database
   if($_POST['email'] != $_SESSION['email'] && $_POST['email'] != "") {
      $email =htmlspecialchars(stripslashes(trim($_POST['email'])));

      //Query to update email
      $emailReset = "UPDATE users SET `users_email` = '{$email}' WHERE `users_id` = '{$_SESSION['userID']}'";

      $conn->query($emailReset);
      if(!$conn->query($emailReset)){
         die("Email did not update!" . $conn->error);
      }

      //Reset session variable
      $_SESSION['email'] = $email;
   }

   //Username cannot be edited

   //Checks that the content entered is not empty and is not the same as what is already in the database
   if($_POST['password'] != $_SESSION['actualPassword'] && $_POST['password'] != ""){
      $newPassword = htmlspecialchars(stripslashes(trim($_POST['password'])));

      //Updates password to new password.....does not hash or verify :S
      $passwordUpdate = "UPDATE login SET `login_pswd` = '{$newPassword}'";

      if(! $conn->query($passwordUpdate)){
         die("Password was not updated!" . $conn->error);
      }

      //Reset session variable
      $_SESSION['actualPassword'] = $newPassword;
   }

   //Checks that the content entered is not empty and is not the same as what is already in the database
   if($_POST['phone'] != $_SESSION['phone'] && $_POST['phone'] != ""){
      $phone = htmlspecialchars(stripslashes(trim($_POST['phone'])));

      //Query to update the users' phone number
      $phoneReset = "UPDATE users SET `users_phone` = '{$phone}' WHERE `users_id` = '{$_SESSION['userID']}'";

      $conn->query($phoneReset);
      if(!$conn->query($phoneReset)){
         die("Phone number did not update!" . $conn->error);
      }

      //Reset session variable
      $_SESSION['phone'] = $phone;
   }

}
?>