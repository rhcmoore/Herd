$(document).ready(function() {

    $(newEventForm).on("submit", postEvent);

    function postEvent(event){

        event.preventDefault();

        var name = $("#name").val().trim();
        var date = $("#date").val();
        var description = $("#description").val();
        var location = $("#location").val();
        var max_attendees = $("#max-attendees").val().trim();
        var communityId = $("#newEventForm").data("id");
        var communityName = $("#newEventForm").data("name");

        if (!name || !date  || !description || !max_attendees) {
            return;
        }

        var newEvent ={
            name: name,
            date: date,
            description: description,
            location: location,
            max_attendees: max_attendees,
            communityId: communityId
        }

        $.post("/api/community/:community/event/new", newEvent, function(data) {
            window.location.href = "/community/"+ communityName + "/event/" + name + "?eventId="+ data.id;
        });

    }

    // Datetimepicker

    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    
    $.datetimepicker.setLocale('en');
    
    $("#date").datetimepicker({
    minDate : tomorrow,
    dayOfWeekStart : 1,
    lang: 'en',
    value: today,
    step: 30
    });

    // Date validation
    $(".submit").on("click", function(){
    var current = new Date(Date.parse($("#date").val()));
        if (current < today) {
        $("#date").removeClass("form-control").addClass("invalid").after('<div class="invalid-feedback show">Date cannot be in the past.</div>');
        }
    });

});

// Google Place API Autocomplete
var placeSearch, autocomplete;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };

      function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('location')),
            {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {
        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }
      }

      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }