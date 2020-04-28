//console.log("from script.js");
const API_KEY = "0842050e641f34d5007ea84fdf7ef33e";


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid={your api key}



// function buildQuery(city, state){


function buildQuery(city, state){
    return "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + state + "&appid=" + API_KEY;
};


function sendQuery(query_url){
    $.ajax({
        url: query_url,
        method: "GET"
    }).then(function(response) {
        //console.log(response);
        //console.log(response);
        //console.log(response["list"]);
        addDays(response["list"]);
    });
};


$("#form").on("submit", function() {
    sendQuery(buildQuery($("#city").val(), $("#state").val()));
    event.preventDefault();
});



function addDays(list){
    //console.log(list);
    for(let i = 0; i < list.length; i += 8){

        console.log(list[i]);
    }


}

