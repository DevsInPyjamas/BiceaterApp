import React from 'react';

export const WeatherComponent : () => Promise<void> = async () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=2514256&units=metric&lang=es&appid=3f8d69f9a7fe5bec71088b6e8acc6969')
        .then(response => response.json())
        .then(data => {
            return (
                <div>
                    <p>MALAGA</p>
                    <p>{data.weather.description}</p>
                    <p>{data.main.temp}ºC</p>
                </div>
            );
        })
};