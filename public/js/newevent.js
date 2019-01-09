$(document).ready(function() {




    function postEvent(event){
        event.preventDefault();
        var communityId;

        if (!name || !date  || !description || !max_attendees) {
            return;
         }

        var newEvent ={
            name: name,
            date: date,
            description: description,
            max_attendees: max_attendees,
            communityId: communityId
        }

        $.post("/api/:community/event/new", newCommunity, function() {
            window.location.href = "/"+ communityName + "/" + name;
          });
 

    }
});