import * as React from 'react';
import { Route, Switch } from "react-router";
import { LoginForm } from "./components/LoginForm";
import { Routes } from "./Routes";

export const LoginRoutes : React.FC = () => {
    return (
        <Switch>
            <Route component={LoginForm} path='/login'/>
            <Route component={Routes}/>
        </Switch>
    )
};