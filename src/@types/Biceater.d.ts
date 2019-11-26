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