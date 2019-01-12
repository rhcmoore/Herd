$(document).ready(function() {
    
    $(loginform).on("submit",login);


    //to-do: comment this code
    function login(event){
        event.preventDefault();
        var name = $("#name").val().trim();
        var password = $("#password").val();;
        if (!name || !password) {
            return;
         }

        var loginInfo ={
            name: name,
            password: password
        }

        $.post("/login", loginInfo, function() {
            window.location.href = "/";
          });
    }

});