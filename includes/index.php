<?php

include 'functions.php';

//sanitize any user input using some of the stuff Pan has been teaching us

if(isset($_GET['username'])){
    $data = validate_login($conn, $_GET['username'], $_GET['password']);
    echo json_encode($data);
} elseif (isset($_GET['users'])) {
    //pass the connection and the id to get the get_one_user function
    $data = get_single_user($conn, $_GET['users']);
    echo json_encode($data);
} else {
    //else get them all
    $data = get_all_users($conn);
    echo json_encode($data);
}

?>