import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { Parada } from './components/Parada';
import { Welcome } from "./components/Welcome";
import { Navbar } from "./components/Navbar";
import {UserProfile} from "./components/UserProfile";
import {UserSearch} from "./components/UserSearch";
import {CommentResponses} from "./components/CommentResponses";

export const Routes : React.FC = () => {
    return (
        <Switch>
            <>
                <Navbar/>
                <Switch>
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/station/:stationId' component={Parada}/>
                    <Route path='/user/:user' component={UserSearch} />
                    <Route path='/comments/:idComment' component={CommentResponses}/>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/users/:userId' component={UserProfile}/>
                </Switch>
            </>
        </Switch>
    );
};