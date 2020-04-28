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

        addDays(response["list"], $("#city").val(), $("#state").val());
    });
};


$("#form").on("submit", function() {
    sendQuery(buildQuery($("#city").val(), $("#state").val()));
    event.preventDefault();
});



function addDays(list, city, state){
    console.log(list);


    $("#forecast").html(`
        <nav class = "level">
            <div class = "level-left">
                <div class = "level-item">

                </div>
            </div>
            <div class = "level-right">
                <div class = "level-item">
                    <img id = "currentIcon" src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${list[0]["weather"][0]["icon"]}.png" height = 300px width = 300px>
                </div>
            </div>
        </nav>`);

    let html = ``;
    for(let i = 8; i < list.length; i += 8){
        console.log(list[i]);
        html += `
            <article class = "tile day is-child">
                <p>${list[i]["dt_txt"].split(" ")[0]}</p>
                <img src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${list[i]["weather"][0]["icon"]}.png">
            </article>
        `;
    }
    
    $("#days").html(html);

    let newSearchItem = `
        <div id = "${city}${state}" class = "search">
            <p>${city}, ${state}</p>
        </div>
    `;
    $("#history").append(newSearchItem);

}



