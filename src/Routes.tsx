import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { Parada } from './components/Parada';
import { Welcome } from "./components/Welcome";
import { Navbar } from "./components/Navbar";

export const Routes : React.FC = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/login' component={LoginForm}/>
                <Route path='/station/:stationId' component={Parada}/>
                <Route exact path='/' component={Welcome} />
            </Switch>
        </>
    );
};