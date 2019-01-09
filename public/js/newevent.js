$(document).ready(function() {

    $(newEventForm).on("submit", postEvent);

    function postEvent(event){

        event.preventDefault();

        var communityId;
        var communityName;
        var name = $("#name").val().trim();
        var date = $("#date").val();
        var description = $("#description").val().trim();
        var max_attendees = $("#max-attendees").val();


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