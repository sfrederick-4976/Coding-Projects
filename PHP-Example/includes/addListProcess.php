<?php
//If the new list has been submitted
   if(isset($_POST['enterNewList'])) {
      //Selects highest list ID and adds one to create the highest ID
      $id = $conn->query("SELECT MAX(`list_id`) FROM alllists");
      $id = $id + 1;

      //Checks if there was a name input.  Sets default otherwise
      if($_POST['enterNewList'] == ""){
         $listName = "My List " . $id;
      }

      $listName = htmlspecialchars(stripslashes(trim($_POST['listName'])));
      $listName = mysqli_real_escape_string($conn, $listName);

      //Selects the current userID using last name
      $getUserID = "SELECT `users_id` FROM users WHERE `users_lname` = '{$_SESSION['lname']}'";

      $userID = $conn->query($getUserID);

      if($userID->num_rows > 0){
         while($row = $userID->fetch_array()){
            $actualID = $row[0];
         }
      }
      //Checks that the id was retrieved
      if (!$conn->query($getUserID)) {
         die ("Could not retrieve user ID" . $conn->error);
      }


      //Creates the new list within alllists
      $createNewList = "INSERT INTO alllists(`list_name`, `list_archived`, `list_user_id`) VALUES('{$listName}', '0', '{$actualID}')";

      //Checks that the list has been added
      if (!$conn->query($createNewList)) {
         die ("New List could not be created!" . $conn->error);
      }
      else {
         $created = true;
      }

      //If the list has been added, go to dashboard otherwise stay on page
      if($created) {
         header("Location: listDashboard.php");
      }
      else {
         header("Location: addList.php");
      }

   }
?>