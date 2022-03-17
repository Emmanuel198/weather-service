import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL_WEATHER_API,
    timeout: 5000,
});


class WeatherService {

    async getWeather(city, country) {
        const url = '/current';
        let response;
        try {
            response = await instance.get(url, { params: { city: city, country: country, key: process.env.REACT_APP_WEATHER_API_KEY, lang: 'es' } })
        } catch (error) {
            response = error;
        }
        return response;
    }

    getIconsWeather(icon) {
        const url = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
        return url;
    }
}
export default new WeatherService();