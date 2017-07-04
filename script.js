$(document).ready(function(){

  var lat;
  var long;
  $.getJSON("http://ip-api.com/json", function(data2){
    lat=data2.lat
    long=data2.lon

  var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=b8038d53ad6872484c9859d2308a8a72";

  $.getJSON(api, function(data){

    var weatherType = data.weather[0].description;
    var fTemp;
    var cTemp;
    var kTemp;
    kTemp = data.main.temp;
    var city = data.name;
    var tempSwap=true;

    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp - 273).toFixed(1);

    $("#city").html(city + ", " + data.sys.country);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457;");
    getIcon(data.weather[0].icon);

     function getIcon(i) {
  switch(i) {
    case '01d':
      $(".icon").html("<i class='wi wi-day-sunny'></i>");
      break;
    case '02d':
      $(".icon").html("<i class='wi wi-day-cloudy'></i>");
      break;
    case '03d':
      $(".icon").html("<i class='wi wi-cloud'></i>");
      break;
    case '04d':
      $(".icon").html("<i class='wi wi-cloudy'></i>");
      break;
    case '09d':
      $(".icon").html("<i class='wi wi-sprinkle'></i>");
      break;
    case '10d':
      $(".icon").html("<i class='wi wi-day-sprinkle'></i>");
      break;
    case '11d':
      $(".icon").html("<i class='wi wi-thunderstorm'></i>");
      break;
    case '13d':
      $(".icon").html("<i class='wi wi-snow'></i>");
      break;
    case '50d':
      $(".icon").html("<i class='wi wi-strong-wind'></i>");
      break;
    case '01n':
      $(".icon").html("<i class='wi wi-night-clear'></i>");
      break;
    case '02n':
      $(".icon").html("<i class='wi wi-night-alt-cloudy'></i>");
      break;
    case '03n':
      $(".icon").html("<i class='wi wi-cloud'></i>");
      break;
    case '04n':
      $(".icon").html("<i class='wi wi-cloudy'></i>");
      break;
    case '09n':
      $(".icon").html("<i class='wi wi-sprinkle'></i>");
      break;
    case '10n':
      $(".icon").html("<i class='wi wi-night-sprinkle'></i>");
      break;
    case '11n':
      $(".icon").html("<i class='wi wi-thunderstorm'></i>");
      break;
    case '13n':
      $(".icon").html("<i class='wi wi-snow'></i>");
      break;
    case '50n':
      $(".icon").html("<i class='wi wi-strong-wind'></i>");
      break;
    default:
      $(".icon").html("<i class='wi wi-day-cloudy'></i>");
      break;
  }
      };

    $("#fTemp").click(function(){

      if (tempSwap === false) {
        $("#fTemp").html(fTemp + " &#8457;");
        tempSwap = true;
      }
      else {
        $("#fTemp").html(cTemp + " &#8451;");
        tempSwap = false;
      }

      });

});
  });
  });
