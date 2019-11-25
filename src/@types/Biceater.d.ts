// Here we will put the types of the project
// for example

export interface JSONResult<T> {
    [index: string]: T;
}

export type Genre = 'Male' | 'Female';

export interface User {
    userId: number;
    username: string;
    name: string;
    surname: string;
    dateOfBirth: Date;
    imagePath: string;
    bio: string;
    genre: Genre;
}

export interface BikeHireDockingStation {
    status : Status;
    totalSlotNumber : TotalSlotNumber;
    availableBikeNumber: AvailableBikeNumber;
    freeSlotNumber : FreeSlotNumber;
    location : Localizacion;
    address : Direccion;
    type : string;
    id : string;
}

export interface Comment {
    commentId: number;
    text: string;
    date: Date;
    authorId: User;
    answersTo?: Comment;
    bikeHireDockingStation?: BikeHireDockingStation;
}

export interface Rating {
    ratingId: number;
    bikeHireDockingStation: BikeHireDockingStation;
    rating: 1 | 2 | 3 | 4 | 5;
    author: User;
}

export interface Status{
    type : string;
    value : string;
}

export interface TotalSlotNumber {
    type : string;
    value : number;
}

export interface AvailableBikeNumber {
    type : string;
    value : number;
}

export interface FreeSlotNumber {
    type : string;
    value : number;
}

export interface FreeSlotNumber {
    type : string;
    value : number;
}

export interface Localizacion {
    type : string;
    value : ValueLocalizacion;
}

export interface ValueLocalizacion {
    type : string;
    coordinates : [number, number];
}

export interface Direccion {
    type : string;
    value: ValueDireccion;
}

export interface ValueDireccion {
    addressCountry : string;
    addressLocality : string;
    streetAddress : string;
    type : string;
}