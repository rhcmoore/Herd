$(document).ready(function() {
    
    $("#loginform").on("submit", login);


    //to-do: comment this code
    function login(event){
        event.preventDefault();
        var username = $("#username").val().trim();
        var password = $("#password").val();;
        // if (!name || !password) {
        //     return;
        // }
       

        var loginInfo ={
            username: username,
            password: password
        }

        $.post("/login", loginInfo, function(result) {
            window.location.href = result ;
        });
    }

});