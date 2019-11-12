// Here we will put the types of the project
// for example

export interface APIResult<T> {
    [index: string]: T;
}

export interface User {
    name: string
    email: string;
}
