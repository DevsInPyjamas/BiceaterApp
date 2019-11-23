import React, {useCallback, useEffect, useState} from 'react';
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
    }, []);

    const callback = useCallback(() => {
        console.log(weather);
    }, []);

    if(weather){
        return (
            <div>
                <p>{weather.name}</p>
                <p>{weather.weather[0].description}</p>
                <p>{weather.mainElem.temp}</p>
            </div>
        );
    }else{
        return(
            <div>
                <p>Malaga</p>
            </div>
        );
    }
};