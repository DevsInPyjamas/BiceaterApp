import React, {useEffect, useState} from 'react';
import {OpenWeather} from "../@types/Biceater";
import {weatherRequest} from "../utils/RequestMaker";

// @ts-ignore
export const WeatherComponent : React.FC = () => {
    const [weather, setWeather] = useState<OpenWeather>();

    useEffect(() => {
        const fetchWeather = () => {
            weatherRequest().then((result: any) => {
                setWeather(result);
            });
        };
        fetchWeather();
    }, [weather]);

    if(weather){
        return (
            <div>
                <p>{weather.name}: {weather.weather[0].description} ({weather.mainElem.temp}ºC)</p>
            </div>
        );
    }else{
        return(
            <div/>
        );
    }
};