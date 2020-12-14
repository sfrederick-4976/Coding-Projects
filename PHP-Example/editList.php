<?php
include_once "includes/header.php";
require "includes/processform.php";
require "includes/editListProcess.php";

if(isset($_GET['listName'])) {
    //Secures working listID and listName and saves in variables
   $listID = $_GET['id'];
   $actualListName = $_GET['listName'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <title><?php echo "Edit " . $actualListName?></title>
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
    <!--First php section checks that the user is logged in and directs users not logged in to the login page-->
   <?php
   if(!$_SESSION['success']) {
      echo "<h1 style='padding-top: 50px;'>You cannot access this page without being logged in.</h1><br>";
      echo "<p>Please <a href='login.php' style='color: #1b1e21;'>log in</a> to continue</p>";
   }
   else {       //Start of else statement indicating that the user is logged in
      ?>
      <div style="padding-top: 50px;">
         <h1>Edit Your List: <?php echo " " . $actualListName?></h1><br>
         <br>
      </div>
      <div>
         <h6>List Details:</h6>

          <!--Form to edit list content including name and option to delete the list.  Redirected -->
         <form action='<?php echo"editList.php?listName={$actualListName}&listId='{$listID}'"?>' method="POST" name="enterNewListName">
            <input type="text" pattern="[a-zA-Z]+\.[a-zA-Z]" placeholder="<?php echo " " . $actualListName?>" name="newListName" id="newListName" title="Input New List Name Here">
            <div id = "listOutput">
               <h3>Your list:</h3>
               <?php
               //php to display the list items that are associated with this listID
               $query = "SELECT * FROM mylist";
               $result = $conn->query($query);

               //if statement displaying list items if there are any
               if($result->num_rows > 0) {

                  echo "<ul>";

                  while($row = $result->fetch_assoc()) {

                     /* send list item and options to the client */
                     if($row['l_id'] == $listID) {
                        echo "<li>";
                        if ($row['l_done']) {
                           echo "<span class='complete'>";
                        }

                        echo $row['l_item'];
                        echo "<br>";

                        if ($row['l_done']) {
                           echo "</span>";
                           echo "<a href='editList.php?complete={$row['l_id']}&notdone=1'style='color: #1b1e21;'> Mark as not done </a>";
                        } else {
                           echo "<a href='editList.php?complete={$row['l_id']}' style='color: #1b1e21;'> Mark as done </a>";
                        }

                        echo "| <a href='editList.php?delete={$row['l_id']}' style='color: #1b1e21;'> Delete item </a><br>&nbsp;";
                        echo "</li>";
                     }
                  } // while loop ends

                  echo "</div>";
                  echo "</ul>";

               }
               else {
                   //Tells user that there are no list items to display
                  echo "<p>is currently empty!</p>";
               }
               ?>
            </div>
             <!--Option to delete the list via checkbox-->
            <input type="checkbox" id="delete" name="deleteList" value="true" style="height: 12px; min-width: 12px; display: inline-block;">
            <label for="delete">Delete this list?</label>
            <br>
            <br>

             <!--Submit and discard button.  Save the changes or discard them-->
            <button type="submit" name="enterNewListName" style="display: inline-block;"> Save Changes to List</button>
            <button type="button" onclick="checkDiscardChanges()" name="discardList" style="display: inline-block;">Discard Changes</button>
            <br>
         </form>

      </div>
      <?php
   }        //End of logged in user interactive content
   ?>

</main>
</body>

<?php include_once "includes/footer.php"; ?>

<!--Content accessed from https://sweetalert.js.org/guides/-->
<!--Accessed on April 16, 2020-->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script>
    function checkDiscardChanges() {
        // Create new div element and buttons for popup
        const newDiv = document.createElement("div");
        const button1 = document.createElement("button");
        const button2 = document.createElement("button");

        //Add buttons content, functionality and style
        button1.innerHTML = "Yes discard the changes to my list!";
        button2.innerHTML = "No do not discard the changes made!";
        button1.onclick = function() {window.location = "listDashboard.php"};
        button2.onclick = function() {window.location = "editList.php"};
        button1.style.display = "inline-block";
        button2.style.display = "inline-block";

        //Append buttons to div
        newDiv.appendChild(button1);
        newDiv.appendChild(button2);

        /**
         * Creates and implements an alert that checks that user wants to discard the changes to the list.
         * Includes buttons created above
         */
        swal({
            title: "Wait!",
            text:"Are you sure you want to discard your changes??",
            content: newDiv,
            icon: "warning",
            button: false
        });
    }
</script>