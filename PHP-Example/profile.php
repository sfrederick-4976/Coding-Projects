<?php
   include_once "includes/header.php";
   require_once "includes/profileProcessing.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <title>Profile Page</title>
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
       <!--Ensures the user is logged in successfully to view page-->
      <?php
      if (!$_SESSION['success']){
         echo '<h2 style="padding-top: 50px;">Please login to see your profile</h2></br></br>';
         echo '<p>You cannot view lists if you are not logged in</p>';
      }
      //If successfully logged in
      else {
         ?>
         <h1 style="padding-top: 50px;"><?php echo $_SESSION['fname'] ?> 's Profile</h1>
         <h6> Welcome to your profile! Here you are able to see and update your personal details </h6><br>
          <div style="padding-right: 400px; width: 20%; float:right;">
              <label for="profilePic" style="width:100%;">Profile Picture</label>
              <img alt="Profile Picture" src="img/defaultprofile.png" id="profilePic" style="width: 250px;">
          </div>
          <div>
            <!--Form for editing all user information-->
            <form method="post" action="<?php echo 'profile.php'?>" name="profileChanges" >
               <label for="firstName" style ="display: inline-block; padding-right: 10px;">First Name:</label>
               <input class="disabled" type="text" placeholder="<?php echo $_SESSION['fname']?>" name="firstName" title="First Name" style ="display: inline-block;" disabled>
                <label for="firstName" style ="display: inline-block; padding-right: 10px;">Last Name:</label>
               <input class="disabled" type="text" placeholder="<?php echo $_SESSION['lname']?>" name="lastName" title="Last Name" style ="display: inline-block;" disabled>
               <br>
               <label for="email" style ="display: inline-block; padding-right: 10px;">Email Address:</label>
               <input class="disabled" type="text" pattern="[\w-]+@([\w-]+\.)+[\w-]+" placeholder="<?php echo $_SESSION['email']?>" name="email" title="Email" style ="display: inline-block;"disabled>
               <br>
               <label for="Username" style ="display: inline-block; padding-right: 10px;">Username:</label>
               <input class="alwaysDisabled" placeholder="<?php echo $_SESSION['username']?>" name="username" title="Username" style ="display: inline-block;" disabled>
               <br>
               <label for="password" style ="display: inline-block; padding-right: 10px;">Password:</label>
               <input class="disabled" type="password" minlength="1" placeholder="<?php echo str_repeat("*", strlen($_SESSION['actualPassword']));?>" name="password" title="Password" style ="display: inline-block;"disabled>
               <br>
               <label for="phone" style ="display: inline-block; padding-right: 10px;">Phone Number:</label>
               <input class="disabled" type="tel" pattern ="(?<!\d)\d{10}(?!\d)" maxlength="10" minlength="10" placeholder="<?php echo $_SESSION['phone']?>" name="phone" title="Phone" style ="display: inline-block;"disabled>
               <br>
               <br>

                <!--Buttons to edit, save changes or cancel the changes made-->
               <button type="button" name="changeEnabled" class="disabled" style ="display: inline-block;">Edit Profile</button>
               <button type="submit" name="profileChanges" class="enabled" style ="display: inline-block;">Save Changes</button>
               <button type="button" onclick="checkCancelChanges()" name="cancelChanges" style ="display: inline-block;"> Cancel Changes</button>
            </form>
          </div>


      <?php } ?> <!--Close of else statements-->
   </main>
</body>
<?php include_once "includes/footer.php";?>


<!--Content accessed from https://sweetalert.js.org/guides/-->
<!--Accessed on April 16, 2020-->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script>
    //For enabling and disabling user fields
    $('input').attr('disabled', true);

    $('.disabled').on('click', function(e) {
        e.preventDefault();
        $('input').attr('disabled', false);
    });

    //Function to display alert when looking to discard changes
    function checkCancelChanges() {
        // Create new div element and buttons for popup
        const newDiv = document.createElement("div");
        const button1 = document.createElement("button");
        const button2 = document.createElement("button");

        //Add buttons content, functionality and style
        button1.innerHTML = "Yes discard the changes!";
        button1.onclick = function() {window.location = "profile.php"; $('input').attr('disabled', true); };
        button1.style.display = "inline-block";

        //Append buttons to div
        newDiv.appendChild(button1);

        /**
         * Creates and implements an alert that checks that user wants to discard the changes to the list.
         * Includes buttons created above
         * Content accessed from https://sweetalert.js.org/guides/ and modified
         * Accessed on April 16, 2020
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