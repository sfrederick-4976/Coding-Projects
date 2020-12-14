<?php
/*
 * @file: 	index.php
 *
 * @author: Raghav V. Sampangi (raghav@cs.dal.ca)
 *
 * @desc:	This file is the homepage of the list interface, as developed during class discussions in CSCI 2170.
 *
 * @notes:	As a student working on A4 and A5 in CSCI 2170, you are allowed to edit this file.
 * 			Based on the assignment requirements, you are also allowed to move code out of this file to new ones.
 * 			When you edit/modify, include block comments to summarize changes.
 * 			Clearly highlight what changed and why, and state assumptions if you make any.
 */

//Sets an maximum length for session to run
$inactive = 7200;
ini_set('session.gc_maxlifetime', $inactive);

session_start();

if ((time() - (time() - $inactive)) > $inactive) {
   session_unset();
   session_destroy();
}

require_once "db/db.php";

?>
<!--Header for all pages -->
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <!-- Bootstrap core CSS -->
    <!-- Used from https://www.getbootstrap.com, 29 January 2019 -->
    <link href="../css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

    <!-- Custom CSS styles -->
    <link rel="stylesheet" href="../css/styles.css">

    <!-- Bootstrap linking -->
    <!-- Used from https://getbootstrap.com/, April 9, 2020 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!--CodePen CSS for Login -->
    <!--Used from https://codepen.io/ace-subido/pen/Cuiep, 8 March, 2020 -->
    <link rel="stylesheet" href="../css/codePen_styles.css">
</head>

<header>
    <div>
        <!--Navigation bar-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">ToDo List</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                       <?php
                        if ($_SESSION['success']) {
                            //If logged in takes you to the add list page
                            echo '<a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>';
                            //If not logged in, takes you to the login page
                        } else {
                            echo '<a class="nav-link" href="login.php">Home <span class="sr-only">(current)</span></a>';
                        }
                        ?>
                    </li>
                    <li class="nav-item">
                        <?php
                        if ($_SESSION['success']) {
                            //If logged in, can view the List Dashboard link enabled
                            echo "<a class=\"nav-link\" href=\"listDashboard.php\" style = \" text-decoration: none;\">List Dashboard</a>";
                            //If not logged in, the link is disabled
                        } else {
                           echo "<a class=\"nav-link\" href=\"listDashboard.php\" style = \" text-decoration: none;\" disabled>List Dashboard</a>";
                        }
                        ?>
                    </li>
                   <?php
                   //If the user is an Administrator, they can view the all users link and page!
                   if(isset($_SESSION['userType'])) {
                     ?>
                       <li class="nav-item"><a href="viewAllUsers.php" class="nav-link" style = "text-decoration: none;">View All Users </a></li>
                    <?php
                   }
                   ?>
                </ul>
                <ul class="navbar-nav ml-auto">
                   <?php
                   //When not logged in, users see a link to the login page
                   if (! $_SESSION['success']) {
                      echo "<li><a href='login.php' class='nav-link ml-auto'>Login</a></li>";
                   }
                   //Once logged in, users see a dropdown menu with links to other pages
                   else {
                      echo '<div class="dropdown show">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' . $_SESSION['fname'] . " ". $_SESSION['lname'] . '</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="listDashboard.php" style = "text-decoration: none;">List Dashboard</a>
                            <a class="dropdown-item" href="profile.php" style = "text-decoration: none;">Profile</a>
                            <div class="dropdown-divider" disabled></div>
                            <a class="dropdown-item" href="logout.php" style = "text-decoration: none;">Log Out</a>
                        </div>
                      </div>';
                   }
                   ?>
                </ul>
            </div>
        </nav>
    </div>
</header>

</html>

<!-- jQuery and Bootstrap JavaScript links -->
<!-- Used from https://www.getbootstrap.com, April 9, 2020 -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
