$(document).ready(function() {
    
    $("#newCommunityForm").on("submit",postCommunity);


    //to-do: comment this code
    function postCommunity(event){
        event.preventDefault();
        var name = $("#name").val().trim();
        var description = $("#description").val();;
        console.log(name);
        console.log(description);
        if (!name || !description) {
            return;
         }

        var newCommunity ={
            name: name,
            description: description
        }

        $.post("/api/community/new", newCommunity, function() {
            window.location.href = "/community/"+ name;
          });
    }
    
});