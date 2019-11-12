import { APIResult } from "../@types/Biceater";

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
 * */
export const baseRequest = async (route: string, config: RequestInit): Promise<APIResult | string> => {
    const requestResult = await fetch(`${API}${route}`, config);
    if(!requestResult.ok) {
        return 'Session has expired';
    }
    return requestResult.json();
};

export const getAllUsers = async () => {
    return await baseRequest('/users', { method: "GET" });
};

export const filterUsersByUsername = async (filter: string) => {
    return await baseRequest(`/users/${filter}`, { method: "GET" });
};