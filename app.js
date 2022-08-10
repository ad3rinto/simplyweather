const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const URL = "https://api.openweathermap.org/data/2.5/weather?appid=9f8040ea808f9433a3acc74797ea8910&q=stockport&units=metric"

    https.get(URL, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const weatherDisc = weatherData.weather[0].description
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0].icon 
            console.log("Icon ID is "+ icon)
            const imgLink = `http://openweathermap.org/img/wn/${icon}@2x.png`




            res.send(`<div>
            <h3>And the weather is currently ${weatherDisc}</h3>
            <h1>The current temperature in your area is ${temp} degrees Celcius</h1>
            <img src = ${imgLink}>
            `)
        })
    })
})


app.listen(3000, function(){
    console.log("Server running on port 3000")
})