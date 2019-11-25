import {BikeHireDockingStation, User} from "../@types/Biceater";

const API = '/api';

/**
 * According to https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
 * fetch receives 2 arguments, the Input and the Request Init
 * Its structure is defined as follows
 * {
 *     method: 'GET' | 'POST' | 'DELETE' | ..
 *     headers: Headers
 *     [...]
 * }
 * Notice that we will need only the headers and the method. Usually we will use GET and POST.
 * The return type is APIResult<T>. Why? Because it is required to add a type that matches
 * with the structure the API returns for every request, for example, if we want to
 * query all the users from the API, in the call signature it is required to add the <User>
 * interface to tell typescript that the exact result type it's APIResult<User>
 * */
export const baseRequest = async<T> (route: string, config?: RequestInit): Promise<T> => {
    config = { credentials: 'include', ...(config || {})};
    const requestResult = await fetch(`${API}${route}`, config);
    if(requestResult.status === 401) {
        window.location.replace('/login');
    }
    if(!requestResult.ok) {
        throw new Error('ERROR:\n' + requestResult.statusText);
    }
    return requestResult.json();
};

export const getAllUsers = async () => {
    return await baseRequest<User[]>('/users');
};

export const filterUsersByUsername = async (filter: string) => {
    return await baseRequest<User>(`/users/${filter}`);
};

export const login = async (username: string, password: string) => {
    return fetch(`${API}/login`, {
        body: JSON.stringify({ username, password }),
        method: 'POST'
    });
};

export const retrieveStation = async (stationId: number) => {
    return await baseRequest<BikeHireDockingStation>(`/stations/${stationId}`);
};

export const retrieveAllStations = async () => {
    return await baseRequest<BikeHireDockingStation[]>('/stations');
};