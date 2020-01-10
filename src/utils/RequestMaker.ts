import {BikeHireDockingStation, ReducedBieHiringStation, User} from "../@types/Biceater";

const API = '/api';

const calculateUrl = () => {
    let url;
    if(process.env.NODE_ENV === 'production') {
        url = '/api/login/google-oauth2';
    } else {
        url = `http://localhost:4000/api/login/google-oauth2`;
    }
    return url;
};
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
        window.location.assign(calculateUrl());
    }
    /*if(!requestResult.ok) {
        throw new Error('ERROR:\n' + requestResult.statusText);
    }*/
    return requestResult.json();
};

export const getAllUsers = async () => {
    return await baseRequest<User[]>('/users');
};

export const filterUsersByUsername = async (filter: string) => {
    return await baseRequest<User>(`/users/${filter}`);
};

export const retrieveStation = async (stationId: number) => {
    return await baseRequest<BikeHireDockingStation>(`/stations/${stationId}`);
};

export const retrieveStationByAddress = async (stationAddress: string) => {
    const request = await fetch(`${API}/stations/search`, {
        method: 'POST',
        body: JSON.stringify({stationAddress: stationAddress}),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    });

    if(request.status === 401) {
        window.location.replace('/login');
    }

    if(!request.ok) {
        throw new Error('ERROR:\n' + request.statusText);
    }

    return request.json();
};

export const retrieveAllStations = async () => {
    return await baseRequest<ReducedBieHiringStation[]>('/stations/');
};

export const retrieveUserInfo = async (userId: number) => {
  return await baseRequest<User>(`/users/${userId}`)
};

export const weatherRequest = async () => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=2514256&units=metric&lang=es&appid=37dfa1a42278b10ac000810d0c4fc720`);
    return await result.json();
};

export const retrieveComments = async (userId: number, taking: number, page: number) => {
    return await baseRequest<Comment>(`/users/${userId}/comments/?taking=${taking}&page=${page}`);
};

export const calculateBestRoute = async (currentLocation: [number, number]) => {
    const request = await fetch(`${API}/routes/calculate`, {
        method: 'POST',
        body: JSON.stringify({ currentLocation: currentLocation }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    });

    if(request.status === 401) {
        window.location.replace('/login');
    }

    if(!request.ok) {
        throw new Error('ERROR:\n' + request.statusText);
    }

    return request.json();
};

export const sendComment = async (comment: string, bikeDockingStationId: number) => {
    return await fetch(`${API}/comments/create`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ comment, bikeDockingStationId }),
        method: 'POST'
    });
};

export const sendRating = async (rating: number, station_id: number) => {
    return await fetch(`${API}/rating/create/`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ rating, station_id }),
        method: 'POST'
    });
};

export const ratingAverage = async (station_id: number) =>  {
    return await baseRequest<number>(`/rating/average/${station_id}`);
};

export const sendUpdateUser = async(userId: number, name: string, surname: string, username: string, bio: string, gender: string,
                                    birthDate: Date | undefined, hobbies: string) => {
  return await fetch(`${API}/users/update`, {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({userId, name, surname, username, bio, gender, birthDate, hobbies}),
      method: 'POST'
  })
};

export const logout = async () => {
    return await fetch(`${API}/logout/`);
};
export const retrieveAllCommentsFromStation = async (stationId: number, taking: number, page: number)=>{
    return await baseRequest<Comment[]>(`/stations/${stationId}/comments/?taking=100000&page=${page}`);
};

export const retrieveResponsesToComment = async (commentId: number) => {
    return await baseRequest<Comment[]>(`/comments/${commentId}/responses`);
};

export const retrieveComment = async (commentId: number) => {
    return await baseRequest<Comment>(`/comments/${commentId}`);
};

export const retrieveUsers = async (user: string)=>{
    return await baseRequest<User[]>(`/users/?user_input=${user}`);
};

export const me = async () => {
    return await baseRequest<{id: number}>(`/users/me`);
};

export const deleteComment = async (commentId: number) => {
    return await baseRequest<void>(`/comments/${commentId}/delete`);
};