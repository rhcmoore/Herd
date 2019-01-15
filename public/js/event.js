$(document).ready(function() {
    
    $("#newEventAttendee").on("submit", attendGuest);
    $("#userAttendee").on("click", attendUser)
    $("#cancelAttend").on("click", cancelAttend)
    //to-do: comment this code
    function attendGuest(event){
        event.preventDefault();

        var name = $("#name").val().trim();        
        var description = $("#description").val();
        if (!name || !description || description.length !== 12) {
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
        })
    }

    function cancelAttend(event){
        event.preventDefault();
       console.log($("#cancelAttend").data("userid"))
        var cancelHere ={
            userId: $("#cancelAttend").data("userid"),
            eventId: $("#cancelAttend").data("eventid")
        }
        $.ajax({
            method: "DELETE",
            url: "/api/userEvent",
            data: cancelHere
        })
        .done(function() {
            location.reload();
        });
        
    }
});