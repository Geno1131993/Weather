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

        addDays(response["list"]);
    });
};


$("#form").on("submit", function() {
    sendQuery(buildQuery($("#city").val(), $("#state").val()));
    event.preventDefault();
});



function addDays(list){
    //console.log(list);

    let html = `
        <div class = "tile is-ancestor">
            <div class = "tile is-horizontal is-12">
                <div class = "tile is-parent">`;

    for(let i = 0; i < list.length; i += 8){
            console.log(list[i]["weather"][0]["icon"]);
            html += `
                    <div class = "tile day is-child">
                        <p>${list[i]["dt_txt"].split(" ")[0]}</p>
                        <img src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${list[i]["weather"][0]["icon"]}.png">
                    </div>`;

    }

    html += `

                </div>
            </div>
        </div>`;

        $("#dashboard").prepend(html);

}

