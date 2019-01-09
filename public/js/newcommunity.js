$(document).ready(function() {



    function postCommunity(event){
        event.preventDefault();
        if (!name || !description) {
            return;
         }

        var newCommunity ={
            name: name,
            description: description
        }

        $.post("/api/community/new", newCommunity, function() {
            window.location.href = "/"+ name;
          });
    }

});