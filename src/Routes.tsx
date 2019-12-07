import React, {useState} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { Parada } from './components/Parada';
import { Welcome } from "./components/Welcome";
import { Navbar } from "./components/Navbar";
import {UserSearch} from "./components/UserSearch";
import {CommentResponses} from "./components/CommentResponses";

export const Routes : React.FC = () => {
    const [user] = useState("");
    return (
        <Switch>
            <>
                <Navbar text={user}/>
                <Switch>
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/station/:stationId' component={Parada}/>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/search/:textInput' component={UserSearch} />
                    <Route path='/comments/:idComment' component={CommentResponses}/>
                </Switch>
            </>
        </Switch>
    );
};