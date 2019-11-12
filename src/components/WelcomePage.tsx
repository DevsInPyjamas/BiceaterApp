import React from 'react';
import {Link} from "react-router-dom";

const WelcomePage : React.FC = () => {

    return (
        <div className='welcome-page-background'>
            Broo
            <Link to='/'>Click me!</Link>
        </div>
    );
};

export default WelcomePage;
