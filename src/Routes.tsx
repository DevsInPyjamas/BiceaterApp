import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { MapComponent } from "./components/MapComponent";
import { Parada } from './components/Parada';
import {Welcome} from "./components/Welcome";
import {UserSearch} from "./components/UserSearch";
import {CommentResponses} from "./components/CommentResponses";

export const Routes : React.FC = () => {
    return (
        <Switch>
            <Route path='/login' component={LoginForm}/>
            <Route path='/parada' component={Parada}/>
            <Route path='/welcome' component={Welcome} />
            <Route path='/search/:textInput' component={UserSearch} />
            <Route path='/comments/:idComment' component={CommentResponses}/>
            <Route exact path='/' component={MapComponent}/>
        </Switch>
    );
};