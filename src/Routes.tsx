import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export const Routes : React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={WelcomePage}/>
        </Switch>
    );
};