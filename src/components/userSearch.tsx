import React from "react";
import {Navbar} from "./Navbar";

export const userSearch : React.FC = () => {

    const filterByUser= () => {fetch('/views.users_by_username').then()};
    const filterALlUser= () => {fetch('/views.all_users').then(r => string [])};


    return (
        <div className="container">
            <Navbar/>
            <h2>Usuarios</h2>
            <div className="card">
                <h5 className="card-header">Nombre usuario</h5>
                <div className="card-body">
                    <button className="btn btn-light" type="submit" > Acceder Perfil </button>
                </div>
            </div>

        </div>

    );
};