import React from 'react';
import {MapComponent} from "./MapComponent";

const WelcomePage : React.FC = () => {

    const pushHistory = () => {
        props.histori
    };

    return (
        <div className='welcome-page-background'>
            Broo
            <div onClick={pushHistory}>Bro 2</div>
        </div>
    );
};

export default WelcomePage;
