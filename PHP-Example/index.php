<?php
    include_once "includes/header.php";

    //Gets the list name currently in use
    $_SESSION['listName'] = $_GET['listName'];

    //Queries the database for the list ID
    $getListID = "SELECT `list_id` FROM alllists WHERE `list_name` = '{$_SESSION['listName']}'";
    $listID = $conn->query($getListID);

    if($listID->num_rows > 0){
       while($row = $listID->fetch_array()){
          $actualListID = $row[0];
       }
    }
    //If id was not retrieved, die, otherwise save ID to useful variable
    if (!$conn->query($getListID)) {
       die ("Could not retrieve list ID" . $conn->error);
    }
    else {
        $indexID = $actualListID;
    }

    require_once "includes/processform.php";
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>To Do list</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/styles.css">

        <!-- Bootstrap core CSS / CDN -->
        <!-- Used from https://www.getbootstrap.com, 29 January 2019 -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

    </head>

    <body>
    <main class="main">
        <?php
        //Checks that a specific list is being edited. Directs user to choose a list otherwise
        if(isset($_SESSION['listName'])){
        ?>

        <div id="listInput">
            <h3><?php echo $_SESSION['listName'] ?></h3>
            <br>
            <h6>Enter your list item!</h6>
            <!--Form to enter list item and add it to the list-->
            <form action='<?php echo "index.php?listName={$_SESSION['listName']}&listID={$indexID}"?>' method="post" name="submitListItem">
                <input type="text" placeholder="Enter list item" name="listItem" title="Input List Item Here">
                <button type="submit" name="submitListItem"> Add List Item</button>
            </form>
        </div>

        <!--Outputs list contents of specific list and user to the page-->
        <div id="listOutput">
            <h3>Your list:</h3>
           <?php
            //Retrieves list items
           $query = "SELECT * FROM mylist WHERE `l_list_id` = '{$indexID}'";
           $result = $conn->query($query);

           if ($result->num_rows > 0) {

              /*Creates the unordered list to display items*/
              echo "<ul>";

              /*Initializes JSON array*/
              $jsonarray = array();

              while ($row = $result->fetch_assoc()) {

                     /*assembling the data into a JSON array */
                    array_push($jsonarray, $row);

                    /*Creates list point to display content*/
                    echo "<li>";
                    if ($row['l_done']) {
                       echo "<span class='complete'>";
                    }

                    echo $row['l_item'];
                    echo "<br>";

                    /*Gives options (complete or delete) for each entry in list*/
                    if ($row['l_done']) {
                       echo "</span>";
                       echo "<a href='index.php?complete={$row['l_id']}&notdone=1&listName={$_SESSION['listName']}'style='color: #1b1e21;'> Mark as not done </a>";
                    } else {
                       echo "<a href='index.php?complete={$row['l_id']}&listName={$_SESSION['listName']}' style='color: #1b1e21;'> Mark as done </a>";
                    }

                    echo "| <a href='index.php?delete={$row['l_id']}&listName={$_SESSION['listName']}' style='color: #1b1e21;'> Delete item </a><br>&nbsp;";
                    echo "</li>";

              }// while loop ends

              echo "<div id='jsondiv' onclick='processJsonData();'>";

              echo "</div>";

              $conn->close();

              echo "</ul>"; //End of unordered list

           } else {
              echo "<p>is currently empty!</p>";
           }
           }

        //If no list is chosen to edit, directs them to either the dashboard or login page
        else {
           echo '<h2 style="padding-top: 50px;">You have not chosen a list to add to!</h2></br></br>';
           echo '<p>Please choose a list from your <a href="listDashboard.php" style="color: #1b1e21;">dashboard</a> or <a href="login.php" style="color: #1b1e21;">login</a> if you have not!</p>';
        }
           ?>
        </div>
    </main>

    <script>
        /*
         * Function to process the addition of list items through AJAX
         */
        function processJsonData() {
            let jsondata = document.getElementById('jsondiv');

            let jsonobject = JSON.parse(jsondata.innerHTML);

            console.log(jsonobject[0].`l_item`);

            let ul = document.createElement("ul");

            for (let i = 0; i<jsonobject.length; i++) {
                let li = document.createElement("li");
                li.innerHTML = jsonobject[i].`l_item`;
                ul.appendChild(li);
            }

            console.log(ul);
            document.body.appendChild(ul);

        }
    </script>

    </body>
</html>

<?php include "includes/footer.php"; ?>