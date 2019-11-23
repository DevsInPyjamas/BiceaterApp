// Here we will put the types of the project
// for example

export interface JSONResult<T> {
    [index: string]: T;
}

export type Genre = 'Male' | 'Female';

export interface User {
    userId: number;
    username: string;
    email: string;
    name: string;
    surname: string;
    dateOfBirth: Date;
    imagePath: string;
    bio: string;
    genre: Genre;
    hobbies: string;
}

export interface BikeHireDockingStation {
    // rellenar con datos de la api publica
}

export interface Comment {
    commentId: number;
    text: string;
    date: Date;
    authorId: User;
    answersTo: Comment;
    bikeHireDockingStation: BikeHireDockingStation;
}

export interface Rating {
    ratingId: number;
    bikeHireDockingStation: BikeHireDockingStation;
    rating: 1 | 2 | 3 | 4 | 5;
    author: User;
}

export interface OpenWeather {
    coordinate: Coordinate;
    weather: WeatherInfo;
    base: string;
    mainElem: MainElem;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface Coordinate {
    lon: number;
    lat: number;
}

export interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Zero {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainElem {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface Clouds {
    all: number;
}

export interface Sys{
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}