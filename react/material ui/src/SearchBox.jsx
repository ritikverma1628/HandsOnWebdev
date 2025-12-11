import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'

export default function SearchBox({weatherDetails}){

    let [city, setCity] = useState('')

    function handleChange(e){
        setCity(e.target.value)
    }

    async function getGeos(city){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6efeb5acfa1357dbcfa11d61c2edb87`)
        let data = await response.json();
        return {lon:data.coord.lon, lat:data.coord.lat}
    }

    async function getWeather(lat,lon){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6efeb5acfa1357dbcfa11d61c2edb87&units=metric`);
        let weather = await response.json();
        return weather;
    }

    async function handleSubmit(e){
        e.preventDefault();
        let {lon, lat}= await getGeos(city);
        let weather = await getWeather(lat,lon);
        weatherDetails(weather)
        setCity('')
        
    }

    return(
        <>
            <div className="searchbox">
                <form onSubmit={handleSubmit} >

                    <label htmlFor="outlined-basic">Enter the city </label><br />
                    <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange}/><br /><br />
                    <Button type='submit' variant="contained" >Search</Button>

                </form>
                <br /><br />
            </div>
        </>
    )
}