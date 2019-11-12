const API = 'api/';

// will think about the typing of the header in the future.
export const baseRequest = async (route: string, headers?: any): Promise<APIResult | string> => {
    const requestResult = await fetch(`${API}${route}`);
    if(!requestResult.ok) {
        return 'Session has expired';
    }
    return requestResult.json();
};

export const getAllUsers = async () => {
    return await baseRequest('/users');
};