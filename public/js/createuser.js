$(document).ready(function() {
    
    $(createuser).on("submit", createUser);


    //to-do: comment this code
    function createUser(event){
        event.preventDefault();

        var username = $("#username").val().trim();
        var password = $("#password").val();
        var name = $("#name").val().trim();        
        if (!name || !username || !password) {
            return;
         }
         console.log(password);
        var newUser ={
            username: username,
            password: password,
            name: name

        }

        $.post("/api/createuser", newUser, function() {
            window.location.href = "/";
        });
    }

});