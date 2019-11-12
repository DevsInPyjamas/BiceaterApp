import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import {MapComponent} from "./components/MapComponent";

export const Routes : React.FC = () => {
    return (
        <Switch>
            <Route path='/login' component={WelcomePage}/>
            <Route exact path='/' component={MapComponent}/>
        </Switch>
    );
};