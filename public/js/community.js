$(document).ready(function() {

    $("#joinComm").on("click", joinComm)
    $("#leaveComm").on("click", leaveComm)

    function joinComm(event){
        event.preventDefault();
       console.log("hello")
        var newHerd ={
            userId: $("#joinComm").data("userid"),
            communityId: $("#joinComm").data("commid")
        }
     
        $.post("/api/userCommunity", newHerd, function() {
            //reload to page you guys want here
            location.reload();
        })
    }

    function leaveComm(event){
        event.preventDefault();
       console.log($("#leaveComm").data("userid"))
        var leaveHerd ={
            userId: $("#leaveComm").data("userid"),
            communityId: $("#leaveComm").data("commid")
        }
        $.ajax({
            method: "DELETE",
            url: "/api/userCommunity",
            data: leaveHerd
        })
        .done(function() {
            location.reload();
        });
        
    }



});