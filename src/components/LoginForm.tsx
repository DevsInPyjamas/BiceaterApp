import React from 'react';

export const LoginForm : React.FC = () => {

    const loginClickHandler =  () => {
        window.alert('This should redirect to the Google Auth');
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='p-5'>
                <form className='form-group'>
                    <button className='btn btn-outline-info' onClick={loginClickHandler}>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};
