import React, { useContext, useState } from 'react';
import WeatherContext from '../providers/WeatherContext';
import WeatherService from '../services/WeatherService';
import Separator from './Separator';

const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];

const CardImage = () => {

    const [foo, setFoo] = useState('')

    const getCountry = async (codeCountry) => {
        let response = await fetch('./countries.txt')
        let foo = await response.text();
        let rows = foo.split('\n')
        let mapCountry = new Map()
        let item;
        for (item of rows) {
            item = item.split(',')
            mapCountry.set(item[0], item[1])
        }
        setFoo(mapCountry.get(codeCountry))
    }

    const { response } = useContext(WeatherContext);
    let icon;
    let description;
    let date_time;
    let city_name;
    let country;
    let temp;
    let precip;
    let rh;
    let wind_spd;
    let tempF;

    if (response.data) {
        const data = response.data.data[0];
        country = data.country_code;
        icon = data.weather.icon;
        description = data.weather.description;
        date_time = data.ob_time;
        date_time = new Date(date_time).getDay();
        city_name = data.city_name;
        temp = data.temp;
        precip = !precip ? "Sin precipitaciones" : data.precip + ' %';
        rh = data.rh.toFixed(0);
        wind_spd = data.wind_spd.toFixed(2);
        tempF = ((9 / 5 * temp) + 32).toFixed(1);
        getCountry(country)
    }
    const nombreDia = dias[date_time];

    return (

        <div>
            <p className='report'>Reporte del clima</p>
            <Separator />
            {response.data ?
                <div>
                    <div className='image-card'>
                        <img className='img' alt='' src={WeatherService.getIconsWeather(icon)}></img>
                        <p className='date-time' >{nombreDia}</p>
                        <p className='city' >{city_name}</p>
                        <p className='country'>{foo}</p>
                        <p className='description'>{description}</p>
                        <p className='temp' >{temp} °C</p>
                        <p className='tempF'>{tempF} °F</p>
                        <div className='wind'>
                            <p className='precip' > Prob. de precipitaciones : {precip}</p>
                            <p className='rh'>Humedad {rh} %</p>
                            <p className='wind'>Viento a {wind_spd} km/h.</p>
                        </div>
                    </div>
                </div> : <p style={{ color: 'black', fontSize: '22px', marginTop: '3rem', textAlign: 'center' }}> Realice una busqueda </p>
            }
        </div>
    )
}
export default CardImage;