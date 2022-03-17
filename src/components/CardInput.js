import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap-v5';
import WeatherContext from '../providers/WeatherContext';
import WeatherService from '../services/WeatherService';
import Separator from './Separator';

const CardInput = () => {

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const { setResponse } = useContext(WeatherContext)

    const handlerInputCountry = (e) => {
        setCountry(e.target.value)
    }

    const handlerInputCity = (e) => {
        setCity(e.target.value)
    }

    const handlerGetWeather = async () => {
        const response = await WeatherService.getWeather(city, country)
        setResponse(response);
    }

    return (
        <div>
            <p style={{ textAlign: 'center', color: 'navy', fontSize: '28px' }}>Seleccioná la zona</p>
            <Separator />
            <div className='card-inputs'>
                <p style={{ color: 'black' }}>Pais</p>
                <input style={{ height: '2rem', width: '90%', fontSize: '22px' }} placeholder='Selecciona una Pais' onChange={handlerInputCountry} />
                <p style={{ color: 'black' }} >Cuidad</p>
                <input style={{ height: '2rem', width: '90%', fontSize: '22px' }} placeholder='Selecciona una Ciudad' onChange={handlerInputCity} />
            </div>
            <div>
                <Button className='button-input ' type='submit' onClick={() => handlerGetWeather()}>BUSCAR</Button>
            </div>
        </div>

    )
}
export default CardInput;

