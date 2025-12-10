import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'

export default function SearchBox(){

    let [city, setCity] = useState('')

    function handleChange(e){
        setCity(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setCity('')
    }

    return(
        <>
            <div className="searchbox">
                <form action="">

                    <label htmlFor="outlined-basic">Enter the city </label><br />
                    <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange}/><br /><br />
                    <Button type='submit' variant="contained" onSubmit={handleSubmit} >Search</Button>

                </form>
                <br /><br />
            </div>
        </>
    )
}