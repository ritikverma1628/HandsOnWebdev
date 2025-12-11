import SearchBox from "./SearchBox";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";

export default function (){
    let [weatherInfo, setWeatherInfo] = useState({})

    function weatherDetails(data){
        let weatherInfo = {
            city:data.name, 
            temp:data.main.temp,
            maxTemp:data.main.temp_max,
            minTemp:data.main.temp_min,
            feelsLike:data.main.feels_like,
            description:data.weather[0].description, 
            pressure:data.main.pressure,
            humidity:data.main.humidity
        }
        setWeatherInfo(weatherInfo)
    }
    return(
        <>
            <SearchBox weatherDetails={weatherDetails} ></SearchBox>
            <WeatherWidget info={weatherInfo}></WeatherWidget>
        </>
    )
}