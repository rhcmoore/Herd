$(document).ready(function() {
    $(document).on("click", "button.", reroute);

    function reroute(){
        var name = this.name;
        window.location.href ="/" + name;

    }





});