<?php
	/*
	 * @file: 	processform.php
	 * 
	 * @author: Raghav V. Sampangi (raghav@cs.dal.ca)
	 * 
	 * @desc:	This file processes data submitted to add/edit/delete items to the list.
	 * 
	 * @notes:	As a student working on A4 and A5 in CSCI 2170, you are allowed to edit this file. 
	 * 			When you edit/modify, include block comments to summarize changes. 
	 * 			Clearly highlight what changed and why, and state assumptions if you make any.
	 */


	/*
	 * Processing submitted list item
	 */

	if (isset($_POST['submitListItem'])) {

		$listItem = htmlspecialchars(stripslashes(trim($_POST['listItem'])));
      $listItem = mysqli_real_escape_string($conn, $listItem);

		$selectID = "SELECT `list_id` FROM alllists WHERE `list_name` = '{$_SESSION['listName']}'";

		$listId = $conn->query($selectID);

		if($listId->num_rows > 0){
         while($row = $listId->fetch_array()){
            $actualListID = $row[0];
         }
      }

      if (!$conn->query($selectID)) {
         die ("ID was not selected!" . $conn->error);
      }

		$insertDataQuery = "INSERT into mylist (`l_item`, `l_done`, `l_list_id`) values('{$listItem}', '0', '{$actualListID}')";

		if (!$conn->query($insertDataQuery)) {
			die ("Nooooooooo!" . $conn->error);
		}
	}


	/*
	 *	Processes delete item requests
	 */

	if (isset($_GET['delete'])) {

		$deleteThisItem = $_GET['delete'];

		$deleteQuery = "DELETE from mylist where `l_id` = '{$deleteThisItem}'";

		if (!$conn->query($deleteQuery)) {
			die ("Nooooooooo!" . $conn->error);
		}
	}

	/*
	 *	Processes completed item requests
	 *  "Mark as done"
	 */

	if (isset($_GET['complete'])) {

		$completeThisItem = $_GET['complete'];

		if (isset($_GET['notdone'])) {

			$notDoneQuery = "UPDATE mylist set `l_done`='0' where l_id = '{$completeThisItem}'";

			if (!$conn->query($notDoneQuery)) {
				die ("Nooooooooo!" . $conn->error);
			}

		}
		else {

			$completeQuery = "UPDATE mylist set `l_done`='1' where l_id = '{$completeThisItem}'";

			if (!$conn->query($completeQuery)) {
				die ("Nooooooooo!" . $conn->error);
			}

		}
	}


?>