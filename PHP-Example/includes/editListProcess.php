<?php

if(isset($_POST['enterNewListName'])) {
   //Gets the name of the list
   $ogListName = $_GET['listName'];

   //Queries for the correct list ID
   $getListID = "SELECT `list_id` FROM alllists WHERE `list_name` = '{$ogListName}'";

   $listQuery = $conn->query($getListID);

   if($listQuery->num_rows >= 0){
      while($row = $listQuery->fetch_array()){
         $actualListID = $row[0];
      }
   }
   //Checks that the ID was retrieved and sets it to the appropriate variable
   if (!$conn->query($getListID)) {
      die ("Could not retrieve list ID" . $conn->error);
   }
   else {
      $newListID = $actualListID;
   }

   /* Checks that a new name was entered in order to perform a change*/
   if ($ogListName != $_POST['newListName'] && $_POST['newListName'] != "") {

      //"Cleans" the input
      $listName = htmlspecialchars(stripslashes(trim($_POST['newListName'])));
      $listName = mysqli_real_escape_string($conn, $listName);

      //Performs the update to the list name
      $editList = "UPDATE alllists SET `list_name` = '{$listName}' WHERE `list_id` = '{$newListID}'";

      $conn->query($editList);

      if (!$conn->query($editList)) {
         die ("List was not edited!" . $conn->error);
      } else {
         $edited = true;
      }

      //Redirects
      if ($edited) {
         header("Location: editList.php?listName={$listName}&id={$newListID}");
      } else {
         header("Location: editList.php?listName={$listName}&id={$newListID}");
      }

   }

   //Deletes the list if the checkbox is selected and returns to the dashboard
   if (isset($_POST['deleteList'])) {
      $deleteQuery = "DELETE FROM alllists WHERE `list_id` = '{$listQuery}'";

      $deleteQuery2 = "DELETE FROM mylist WHERE `l_list_id` = '{$listQuery}'";

      $conn->query($deleteQuery);
      $conn->query($deleteQuery2);

      if (!$conn->query($deleteQuery)) {
         die ("Nooooooooo!" . $conn->error);
      } else {
         header("Location: listDashboard.php");
      }
   }
}
?>