//console.log("from script.js");
const API_KEY = "0842050e641f34d5007ea84fdf7ef33e";



//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

//api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

//api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

// function buildQuery(city, state){


function buildQuery(city, state){
    return "api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&appid=" + API_KEY;
};


function sendQuery(query_url){
    $.ajax({
        url: query_url,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
};


$("#form").on("submit", function() {
    //console.log("User clicked Submit.");

    //console.log($("#city").val() + ", " + $("#state").val());
    // console.log(buildQuery($("#city").val(), $("#state").val()));

    sendQuery(buildQuery($("#city").val(), $("#state").val()));




    event.preventDefault();

});
