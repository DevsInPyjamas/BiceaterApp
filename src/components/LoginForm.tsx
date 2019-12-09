import React from 'react';

export const LoginForm : React.FC = () => {

    const loginClickHandler =  () => {
        let url;
        if(process.env.NODE_ENV === 'production') {
            url = '/api/login/google-oauth2';
        } else {
            url = 'http://localhost:3000/api/login/google-oauth2';
        }
        window.location.assign(url);
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='p-5'>
                <form className='form-group' onClick={(event: any) => {event.preventDefault()}}>
                    <button className='btn btn-outline-info' onClick={loginClickHandler}>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};