// Here we will put the types of the project
// for example

import Status = jest.Status;

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

export interface datosAbierto{
        status : condicion;
        totalSlotNumber : TotalSlotNumber;
        availableBikeNumber: AvailableBikeNumber;
        freeSlotNumber : FreeSlotNumber;
        location : Localizacion;
        address : Direccion;
        type : string;
        id : string;

}
export interface condicion{
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
    value : valueLocalizacion;
}

export interface valueLocalizacion {
    type : string;
    coordinates : coordinates;
}

export interface coordinates {
    0 : number;
    1 : number;
}

export interface Direccion {
    type : string;
    value: valueDireccion;
}

export interface valueDireccion {
    addressCountry : string;
    addressLocality : string;
    streetAddress : string;
    type : string;

}
