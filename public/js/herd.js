$(document).ready(function() {
    var colors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#ff9800'];
    var selected = [];
    for (i = 0; i < colors.length; i++){
        var random = colors[Math.floor(Math.random() * colors.length)];
        if (selected.indexOf(random) == -1 ) {
        selected.push(random);
        }
    }

    $('h3').each(function(i){
        $(this).css('color', selected[i]);
    });

    $(".submit").click(function(event) {
        var form = $('form');
    
        if (form[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        
        form.addClass('was-validated');    
    });

    var dateTime = $("#date-time").val();
    dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

});