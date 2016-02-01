  $(document).ready(function () {
  $('#submit-btn').click(function(event) {
    event.preventDefault()
  $("body").removeClass();

  var city = $('#city-type').attr("city");
  
  //storing user input
  var city = $('#city-type').val();


  //allows me to put in the text from lower to uppercase
  var city = city.toUpperCase();

//This is to remove any white spaces at the beginning and end of the string
    var city = city.trim();

    //adding the string value of the user input
    $('#city-type') .val('');

    //input cities to return the value which is the background images
    if (city === "NEW YORK" || city === "NEW YORK CITY" || city === "NYC") {
      city = "NYC";
    }
    else if (city === "SAN FRAN" || city === "SF" || city === "SAN FRANCISCO" || city === "BAY AREA") {
      city = "SF";
    }
    else if (city === "LOS ANGELES" || city === "LAX" || city === "LA" || city === "HOllYWOOD") {
      city = "LA";
    }
    else if (city === "AUSTIN") {
      city = "AUSTIN";
    }
    else if (city === "SYD" || city === "SYDNEY") {
      city = "SYDNEY";
      alert("WAIT!! I added two more cities for extra credit");
      alert("type DC");
    }
    else if (city === "DC" || city === "DISTRICT OF COLUMBIA") {
      city = "DC";
      alert("Now type Compton");
    }
    else if (city === "COMPTON") {
      city = "COMPTON";
    }

//conditional statements that add the classes in our CSS that change the background images 
    if (city === "AUSTIN") {
      $('body').addClass('austin');
    }
    else if (city === "NYC") {
      $('body').addClass('nyc');
    }
    else if (city === "SF") {
      $('body').addClass('sf');
    }
    else if (city === "LA") {
      $('body').addClass('la');
    }
    else if (city === "SYDNEY") {
      $('body').addClass('sydney');
    }
    else if (city === "DC") {
      $('body').addClass('dc');
    }
      else if (city === "COMPTON") {
      $('body').addClass('compton');
    }
  });
});