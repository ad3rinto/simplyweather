const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const URL = "https://api.openweathermap.org/data/2.5/weather?appid=9f8040ea808f9433a3acc74797ea8910&q=stockport&units=metric"

    https.get(URL, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData.weather[0].description)
            const temp = weatherData.main.temp
            res.send(`<h1>The current temperature in your area is ${temp} degrees Celcius</h1>`)
        })
    })
})


app.listen(3000, function(){
    console.log("Server running on port 3000")
})