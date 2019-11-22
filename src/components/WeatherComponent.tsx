import React, {useCallback, useEffect, useState} from 'react';
import {OpenWeather} from "../@types/Biceater";
import {weatherRequest} from "../utils/RequestMaker";

export const WeatherComponent : React.FC = () => {
    const [weather, setWeather] = useState<OpenWeather | undefined>();

    useEffect(() => {
        weatherRequest().then((result: any) => {
            setWeather(result);
        });
    });

    const callback = useCallback(() => {
        console.log(weather);
    }, []);

    return (
        <div>
            <button onClick={callback}>a</button>
            <p>Malaga</p>
        </div>
    );
};