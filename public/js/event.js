$(document).ready(function() {
    
    $("#newEventAttendee").on("submit", attendGuest);
    $("#userAttendee").on("click", attendUser)

    //to-do: comment this code
    function attendGuest(event){
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

    function attendUser(event){
        event.preventDefault();

       
        var newAttendee ={
            userId: $("#userAttendee").data("userid"),
            eventId: $("#userAttendee").data("eventid")
        }
     
        $.post("/api/userEvent", newAttendee, function() {
            //reload to page you guys want here
            location.reload();
        });
    }
});