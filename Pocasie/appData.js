var APPID = "b83cfc294c2330f1299f03d8988d3162";
var url ="http://api.openweathermap.org/data/2.5/weather?q=";

var cit = $("#town");
$("#search").click(findOutCity);
$("#city-name").keypress( function(e) {
        if(e.which === 13) {
                findOutCity();
        };
});

/* Function finds out city */
function findOutCity() {
    var cityName = $("#city-name").val();
    if (!cityName.length) cityName = "Warszawa";
    $.ajax({
        url: url + cityName + "&APPID=" + APPID + "&units=metric",
        method: 'GET',
        success: showCity
    });
};

/* Function shows weather conditions in chosen city */
function showCity(resp) {
    var city = resp;
    cit.empty();
    $("#town").append("<li id='top'>Weather conditions: </li>")
    $("#town").append("<li id='name'>" + city.name + "</li>");
    $("#town").append("<div id='info'></div>");
    $("#town").append("<div id='pic'></div>");
    $("#info").append("<li class='value'>" + "Temperature: </li>" + "<li class='rightside'>" + Math.round(city.main.temp) + " °C" + "</li>");
    $("#info").append("<li class='value'>" + "Pressure: </li>" + "<li class='rightside'>" + city.main.pressure + " hPa" + "</li>");
    $("#info").append("<li class='value'>" + "Humidity: </li>" + "<li class='rightside'>" + city.main.humidity + " %" + "</li>");
    $("#info").append("<li class='value'>" + "Speed of the wind: </li>" + "<li class='rightside'>" + city.wind.speed + " m/s" + "</li>");
    $("#info").append("<li class='value'>" + "Clouds: </li>" + "<li class='rightside'>" + city.clouds.all + " %" + "</li>");

/* Choosing visibility */
    if (city.weather[0].description === "clear sky") {
        $("#info").append("<li class='value'>" + "Visibility: </li>" + "<li class='rightside'> Clear sky </li>");
    } else if (city.weather[0].description === "few clouds") {
        $("#info").append("<li class='value'>" + "Visibility: </li>" + "<li class='rightside'> Few clouds </li>");
    } else if (city.weather[0].description === "scattered clouds") {
        $("#info").append("<li class='value'>" + "Visibility: </li>" + "<li class='rightside'> Scattered clouds </li>");
    } else if (city.weather[0].description === "broken clouds") {
        $("#info").append("<li class='value'>" + "Visibility:</li>" + "<li class='rightside'> Broken clouds </li>");
    } else if (city.weather[0].description === "shower rain") {
        $("#info").append("<li class='value'>" + "Visibility:</li>" + "<li class='rightside'> Shower rain </li>");
    } else if (city.weather[0].description === "light rain") {
        $("#info").append("<li class='value'>" + "Visibility:</li>" + "<li class='rightside'> Light rain </li>");
    } else if (city.weather[0].description === "thunderstorm") {
        $("#info").append("<li class='value'>" + "Visibility:</li>" + "<li class='rightside'> Thunderstorm </li>");
    } else if (city.weather[0].description === "snow") {
        $("#info").append("<li class='value'>" + "Visibility:</li>" + "<li class='rightside'> Snow </li>");
    } else if (city.weather[0].description === "fog") {
        $("#info").append("<li class='value'>" + "Visibility:</li>" + "<li class='rightside'> Fog </li>");
    }; 

/* Choosing picture for visibility */
    if (city.weather[0].icon === "01d") {
            $("#pic").append("<img src='png/sun.png'></img>");
    } else if (city.weather[0].icon === "01n") {
            $("#pic").append("<img src='png/moon.png'></img>");
    } else if (city.weather[0].icon === "02d") {
            $("#pic").append("<img src='png/suncloud.png'></img>");
    } else if (city.weather[0].icon === "02n") {
            $("#pic").append("<img src='png/mooncloud.png'></img>");
    } else if (city.weather[0].icon === "03d") {
            $("#pic").append("<img src='png/cloud.png'></img>");
    } else if (city.weather[0].icon === "03n") {
            $("#pic").append("<img src='png/cloud.png'></img>");
    } else if (city.weather[0].icon === "04d") {
            $("#pic").append("<img src='png/cloudy.png'></img>");
    } else if (city.weather[0].icon === "04n") {
            $("#pic").append("<img src='png/cloudy.png'></img>");
    } else if (city.weather[0].icon === "09d") {
            $("#pic").append("<img src='png/rain.png'></img>");
    } else if (city.weather[0].icon === "09n") {
            $("#pic").append("<img src='png/rain.png'></img>");
    } else if (city.weather[0].icon === "10d") {
            $("#pic").append("<img src='png/sunrain.png'></img>");
    } else if (city.weather[0].icon === "10n") {
            $("#pic").append("<img src='png/moonrain.png'></img>");
    } else if (city.weather[0].icon === "11d") {
            $("#pic").append("<img src='png/dark.png'></img>");
    } else if (city.weather[0].icon === "11n") {
            $("#pic").append("<img src='png/dark.png'></img>");
    } else if (city.weather[0].icon === "13d") {
            $("#pic").append("<img src='png/snow.png'></img>");
    } else if (city.weather[0].icon === "13n") {
            $("#pic").append("<img src='png/snow.png'></img>");
    } else if (city.weather[0].icon === "50d") {
            $("#pic").append("<img src='png/mist.png'></img>");
    } else if (city.weather[0].icon === "50n") {
            $("#pic").append("<img src='png/mist.png'></img>");
    };
}