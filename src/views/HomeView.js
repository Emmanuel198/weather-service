import React from 'react';
import CardInput from '../components/CardInput';
import Footer from '../components/Footer';
import CardImage from '../components/CardImage';
import { WeatherProvider } from '../providers/WeatherContext';

function HomeVeiw() {

    return (
        <div className='home-view'>
            <h1 style={{textAlign:'center', justifyContent:'space-between' }}>SERVICIO DEL CLIMA</h1>
            <WeatherProvider>
            <hr style={{ border: '2px solid rgb(255, 102, 89) ', maxWidth: '90%', marginLeft:'5rem', marginRight:'5rem' }} />
                <div className='card-home-view'>
                    <div className='card selector-country'>
                        <CardInput />
                    </div>
                    <div className='card image-weather'>
                        <CardImage/>
                    </div>
                </div>
            </WeatherProvider>
            <Footer />
        </div>
    )
};



export default HomeVeiw;