<?php
   include_once "includes/header.php";
   ?>

<!DOCTYPE html>
<html lang="en">
<head>
   <title>Create New List</title>
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
      <?php
      //If user is NOT logged in display warning message and link to login page
      if(!$_SESSION['success']) {
         echo "<h1 style='padding-top: 50px;'>You cannot access this page without being logged in.</h1><br>";
         echo "<p>Please <a href='login.php' style='color: #1b1e21;'>log in</a> to continue</p>";
      }
      //If logged in, option to create new list
      else {
         ?>
         <div style="padding-top: 50px;">
            <h1>Create a new list!</h1><br>
            <br>
         </div>
         <div>
            <h6>Enter the name of your new list</h6>
             <!--Form to create a new list-->
            <form action="listDashboard.php" method="post" name="enterNewList">
               <input type="text" pattern="[a-zA-Z]+\.[a-zA-Z]" placeholder="Enter list name" name="listName" title="Input List Name Here">
               <br>
                <!--Buttons to either save list or discard the new list-->
               <button type="submit" name="enterNewList" style="display: inline-block;"> Save New List</button>
               <button type="button" onclick="checkDiscard()" name="discardList" style="display: inline-block;">Discard New List</button>
            </form>
         </div>
         <?php
      }
      ?>

   </main>
</body>

<?php include_once "includes/footer.php"; ?>

<!--Content accessed from https://sweetalert.js.org/guides/-->
<!--Accessed on April 16, 2020-->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script>
    /*
     * Function to display alert prompting user to confirm they want to discard their new list
     */
   function checkDiscard() {
       // Create new div element and buttons for popup
       const newDiv = document.createElement("div");
       const button1 = document.createElement("button");
       const button2 = document.createElement("button");

       //Add buttons content, functionality and style
       button1.innerHTML = "Yes discard my list!";
       button2.innerHTML = "No do not discard my list!";
       button1.onclick = function() {window.location = "listDashboard.php"};
       button2.onclick = function() {window.location = "addList.php"};
       button1.style.display = "inline-block";
       button2.style.display = "inline-block";

       //Append buttons to div
       newDiv.appendChild(button1);
       newDiv.appendChild(button2);

       /**
        * Creates and implements an alert that checks that user wants to discard newly created list.
        * Includes buttons created above
        */
       swal({
           title: "Wait!",
           text:"Are you sure you want to discard your new list?",
           content: newDiv,
           icon: "warning",
           button: false
       });
   }
</script>
