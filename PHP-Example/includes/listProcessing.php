<!--This code is to show the lists the user has created!-->

   <?php
      /*
   *	Processes delete item requests
   */

      if (isset($_GET['listDelete'])) {
         $deleteThisList = $_GET['listDelete'];
         $listID = $_GET['id'];

         $deleteQuery = "DELETE FROM alllists WHERE `list_id` = '{$listID}'";

         $deleteQuery2 = "DELETE FROM mylist WHERE `l_list_id` = '{$listID}'";

         $conn->query($deleteQuery);
         $conn->query($deleteQuery2);

         if (!$conn->query($deleteQuery)) {
            die ("Nooooooooo!" . $conn->error);
         }
      }

   /*
 *	Processes completed item requests
 *  "Mark as done"
 */

   if (isset($_GET['listComplete'])) {

      $listCompleted = $_GET['listComplete'];
      $finished = $_GET['finished'];

      if ($finished == 0) {

         $notDoneQuery = "UPDATE alllists set `list_archived`='1' where list_name = '{$listCompleted}'";

         if (!$conn->query($notDoneQuery)) {
            die ("The list was not changed!" . $conn->error);
         }

      }
      else {

         $completeQuery = "UPDATE alllists set `list_archived`='0' where list_name = '{$listCompleted}'";

         if (!$conn->query($completeQuery)) {
            die ("No changes were made to the list" . $conn->error);
         }

      }
   }

   ?>
