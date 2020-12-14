<?php
include_once "includes/header.php";
?>
<!DOCTYPE html>
<html>
   <head>
      <title>View All Users</title>
      <link rel="stylesheet" type="text/css" href="css/styles.css">
   </head>
   <body>
      <main class="main">
         <?php
         //Checks that the user trying to access the page has admin priveliges
         if($_SESSION['userType'] == 'admin')
         ?>
         <div style="padding-top: 50px; padding-bottom: 50px;">
             <h1>Welcome Administrator</h1>
             <h5>Here you can view and access content for all users on the system.</h5>
         </div>
         <!--Table to display all users and their information to admin-->
         <table id="userTable">
            <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email Address</th>
            </tr>
         <?php
         /*Queries the database for all users names and emails to display to admin*/
         $selectUsers = "SELECT `users_fname`, `users_lname`, `users_email` FROM users";

         $queryUsers = $conn->query($selectUsers);

         if(!$conn->query($selectUsers)){
            die("Users weren't selected" . $conn->error);
         }

         /*Displays each user to the client*/
         if($queryUsers->num_rows > 0){
            while($row = $queryUsers->fetch_array()){
                echo "<tr>
                    <td>" . $row['users_fname'] . "</td>
                    <td>" . $row['users_lname'] . "</td>
                    <td>" . $row['users_email'] . "</td>
                </tr>";
            }
         }
         ?>
         </table>

      </main>

<?php include_once "includes/footer.php"; ?>
