$(document).ready(function() {
    $("#signup").on("submit", signup);

    function signup(event){
        event.preventDefault();

        var username = $("#username").val().trim();
        var password = $("#password").val();
        var name = $("#name").val().trim();        
        if (!name || !username || !password) {
            return;
         }
         var newUser ={
            username: username,
            password: password,
            name: name 
        }

        $.post("/api/signup", newUser, function() {
            window.location.href = "/";
        });
    }

});