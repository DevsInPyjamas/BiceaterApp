import React, {useEffect, useState} from 'react';
import {OpenWeather} from "../@types/Biceater";
import {weatherRequest} from "../utils/RequestMaker";

// @ts-ignore
export const WeatherComponent : React.FC = () => {
    const [weather, setWeather] = useState<OpenWeather>();

    useEffect(() => {
        if(weather === undefined) {
            weatherRequest().then((result: any) => {
                setWeather(result);
            });
        }
    }, [weather]);

    return (
        <div>
            { weather && <p>{weather.name}: {weather.weather[0].description} ({weather.main.temp}ºC)</p>}
        </div>
    );
};