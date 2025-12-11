import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './WeatherWidget.css'

export default function WeatherWidget({info}){
    let HOT="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
    let COLD="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s="
    let RAIN="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut6ERgCLBRRzKbdSvwgtGcI0Dild3W5kwiA&s"
    return(
        <>
        {info.city?<div className="weatherwidget">

        <Card sx={{ maxWidth: 345 }} style={{boxShadow: '0px 0px 10px 5px rgb(63, 63, 63)'}}>
            <CardMedia
                sx={{ height: 190 }}
                image={info.humidity>75?RAIN:(info.temp>15?HOT:COLD)}
                title="weather"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                {info.city}&nbsp;{info.humidity>75?<ThunderstormIcon/>:(info.temp>15?<SunnyIcon/>:<SevereColdIcon/>)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component='div' className='cardContent'>
                    <div>Temperature = <b>{info.temp}&deg;C</b></div>
                    <div className="minmaxtemp">
                        <div>Min. Temperature <b>{info.maxTemp}&deg;C</b></div>
                        <div>Max. Temperature <b>{info.minTemp}&deg;C</b></div>
                    </div>
                    <div>Humidity = <b>{info.humidity}%</b></div>
                    <div>Pressure = <b>{info.pressure} hPa</b></div>
                    <div>it feels like <b>{info.feelsLike}&deg;C</b> and its <b>{info.description}</b></div>
                </Typography>
            </CardContent>
            
            </Card>
        </div>:null}

        </>
    )
}