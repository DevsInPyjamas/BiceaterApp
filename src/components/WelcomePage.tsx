import React from 'react';
import {Link} from "react-router-dom";
import {APIResult, User} from "../@types/Biceater";
import {filterUsersByUsername} from "../utils/RequestMaker";

const WelcomePage : React.FC = () => {

    const [number, setNumber] = React.useState<APIResult<User> | string>('');
    const [error, setError] = React.useState<boolean>(false);

    const buttonClickHandler =  () => {
        filterUsersByUsername('jaco').then((value) => {
            setNumber(value);
            setError(false);
        }).catch((error) => {
            setError(true);
        });
    };

    return (
        <div className='welcome-page-background'>
            Broo
            {!number && <button onClick={buttonClickHandler}>Click me!</button>}
            {number && <Link to='/'>Llevame al iniceo</Link>}
            {error && 'Error!'}
        </div>
    );
};

export default WelcomePage;
