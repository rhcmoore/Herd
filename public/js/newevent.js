$(document).ready(function() {

    $(newEventForm).on("submit", postEvent);

    function postEvent(event){

        event.preventDefault();

        var communityId = 1;
        var communityName = "Title";
        var name = $("#name").val().trim();
        var date = $("#date").val();
        var description = $("#description").val();
        var max_attendees = $("#max-attendees").val().trim();


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

        $.post("/api/:community/event/new", newEvent, function(data) {
            window.location.href = "/"+ communityName + "/" + name;
        });
 

    }
});