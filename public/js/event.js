$(document).ready(function() {
    
    $(newEventAttendee).on("submit", attendEvent);


    //to-do: comment this code
    function attendEvent(event){
        event.preventDefault();

        var name = $("#name").val().trim();        
        var description = $("#description").val();
        if (!name) {
            return;
         }
        var newAttendee ={
            name: name,
            description: description,
            eventId: $("#newEventAttendee").data("id")
        }

        $.post("/api/attendee", newAttendee, function() {

            //reload to page you guys want here
            location.reload();
        });
    }
});