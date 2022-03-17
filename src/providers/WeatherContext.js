import React, { useState } from 'react';

const WeatherContext = React.createContext();

const WeatherProvider = (props) => {

    const [response, setResponse] = useState({response:{data:null}})
    return (
        <WeatherContext.Provider value={{ response, setResponse }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
export { WeatherProvider };
export default WeatherContext;